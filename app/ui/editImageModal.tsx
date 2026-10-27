'use client';

import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { X, Check, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface Props {
  imageSrc: string;
  onCropComplete: (croppedFile: File, croppedUrl: string) => void;
  onCancel: () => void;
}

export default function ModalCortarImagem({ imageSrc, onCropComplete, onCancel }: Props) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // 🔒 Função que calcula os limites permitidos e trava a imagem dentro da área
  const clampOffset = (x: number, y: number, currentZoom: number) => {
    if (!containerRef.current || !imageRef.current) return { x, y };

    const container = containerRef.current.getBoundingClientRect();
    const img = imageRef.current;

    // Tamanho real exibido da imagem multiplicando pelo zoom
    const imgWidth = img.clientWidth * currentZoom;
    const imgHeight = img.clientHeight * currentZoom;

    // Limites máximos de arrasto para não revelar o fundo
    const maxOffsetX = Math.max(0, (imgWidth - container.width) / 2);
    const maxOffsetY = Math.max(0, (imgHeight - container.height) / 2);

    return {
      x: Math.min(Math.max(x, -maxOffsetX), maxOffsetX),
      y: Math.min(Math.max(y, -maxOffsetY), maxOffsetY),
    };
  };

  // Início do Arraste (Mouse)
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  // Movimento com trava (Mouse)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rawX = e.clientX - dragStart.x;
    const rawY = e.clientY - dragStart.y;
    setOffset(clampOffset(rawX, rawY, zoom));
  };

  // Suporte a Telas Sensíveis ao Toque (Mobile)
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - offset.x,
      y: e.touches[0].clientY - offset.y,
    });
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    const rawX = e.touches[0].clientX - dragStart.x;
    const rawY = e.touches[0].clientY - dragStart.y;
    setOffset(clampOffset(rawX, rawY, zoom));
  };

  const handleEndDrag = () => setIsDragging(false);

  // Reajusta a posição se a alteração do zoom expor o fundo
  const handleZoomChange = (newZoom: number) => {
    setZoom(newZoom);
    setOffset((prev) => clampOffset(prev.x, prev.y, newZoom));
  };

  // Gera o arquivo cortado final no Canvas usando coordenadas relativas
  const handleConfirmCrop = () => {
    if (!containerRef.current || !imageRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const image = imageRef.current.getBoundingClientRect();

    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const imgElement = new Image();
    imgElement.crossOrigin = 'anonymous';
    imgElement.src = imageSrc;

    imgElement.onload = () => {
      // Proporção entre a imagem original em alta resolução e o tamanho renderizado na tela
      const scaleX = imgElement.naturalWidth / image.width;
      const scaleY = imgElement.naturalHeight / image.height;

      // Posição exata do corte
      const cropX = (container.left - image.left) * scaleX;
      const cropY = (container.top - image.top) * scaleY;
      const cropWidth = container.width * scaleX;
      const cropHeight = container.height * scaleY;

      ctx.drawImage(
        imgElement,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );

      canvas.toBlob((blob) => {
        if (!blob) return;
        const croppedFile = new File([blob], 'banner-cropped.jpg', { type: 'image/jpeg' });
        const croppedUrl = URL.createObjectURL(blob);
        onCropComplete(croppedFile, croppedUrl);
      }, 'image/jpeg', 0.9);
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Topo do Modal */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <Move className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-bold text-gray-900">Ajustar Enquadramento do Banner</h3>
          </div>
          <button onClick={onCancel} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Área de Ajuste */}
        <div className="p-6 bg-slate-900 flex flex-col items-center justify-center">
          <p className="text-xs text-slate-300 mb-3 flex items-center gap-1.5">
            <Move className="h-3.5 w-3.5" /> Arraste para posicionar o banner
          </p>

          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEndDrag}
            onMouseLeave={handleEndDrag}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEndDrag}
            className="relative w-full h-56 rounded-xl overflow-hidden border-2 border-blue-500 cursor-grab active:cursor-grabbing shadow-inner flex items-center justify-center bg-black"
          >
            <img
              ref={imageRef}
              src={imageSrc}
              alt="Enquadramento"
              draggable={false}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              }}
              // min-w-full e min-h-full garantem que no zoom 1 a imagem cubra o container
              className="max-w-none min-w-full min-h-full object-cover select-none pointer-events-none"
            />
          </div>

          {/* Controle de Zoom */}
          <div className="flex items-center gap-4 mt-5 w-full max-w-xs bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
            <ZoomOut className="h-4 w-4 text-slate-400" />
            <input
              type="range"
              min="1"
              max="3"
              step="0.05"
              value={zoom}
              onChange={(e) => handleZoomChange(parseFloat(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <ZoomIn className="h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* Rodapé */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-200 transition"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleConfirmCrop}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition shadow-sm"
          >
            <Check className="h-4 w-4" /> Aplicar Corte
          </button>
        </div>

      </div>
    </div>
  );
}