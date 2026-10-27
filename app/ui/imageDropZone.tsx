'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { UploadCloud, X, Crop } from 'lucide-react';
import ModalCortarImagem from './editImageModal';

interface Props {
  name: string;
  multiple?: boolean;
  defaultImage?: string | null;
}

interface ImageItem {
  id: string;
  file?: File;
  url: string;
}

export default function ImageDropzone({ name, multiple = false, defaultImage }: Props) {
  const [images, setImages] = useState<ImageItem[]>(() => {
    if (defaultImage) {
      return [{ id: 'default', url: defaultImage }];
    }
    return [];
  });
  const [isDragging, setIsDragging] = useState(false);
  const [tempImageForCrop, setTempImageForCrop] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const atualizarInputNativo = (novasImagens: ImageItem[]) => {
    if (!fileInputRef.current) return;
    const dt = new DataTransfer();
    novasImagens.forEach((item) => {
      if (item.file) dt.items.add(item.file);
    });
    fileInputRef.current.files = dt.files;
  };

  const processarSelecao = (files: FileList | File[]) => {
    const file = Array.from(files).find((f) => f.type.startsWith('image/'));
    if (!file) return;

    if (!multiple) {
      // Abre o modal de corte se for imagem única (banner)
      const objectUrl = URL.createObjectURL(file);
      setTempImageForCrop(objectUrl);
    } else {
      // Adiciona direto se for múltiplas fotos
      adicionarImagemCortada(file, URL.createObjectURL(file));
    }
  };

  const adicionarImagemCortada = (file: File, url: string) => {
    const novoItem: ImageItem = {
      id: Math.random().toString(36).substring(2, 9),
      file,
      url,
    };

    const listaAtualizada = multiple ? [...images, novoItem] : [novoItem];
    setImages(listaAtualizada);
    atualizarInputNativo(listaAtualizada);
    setTempImageForCrop(null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processarSelecao(e.target.files);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processarSelecao(e.dataTransfer.files);
    }
  };

  const removerImagem = (id: string) => {
    const listaFiltrada = images.filter((img) => img.id !== id);
    setImages(listaFiltrada);
    atualizarInputNativo(listaFiltrada);
  };

  return (
    <div className="w-full space-y-3">
      {/* Modal de Recorte Interativo */}
      {tempImageForCrop && (
        <ModalCortarImagem
          imageSrc={tempImageForCrop}
          onCropComplete={(croppedFile, croppedUrl) => adicionarImagemCortada(croppedFile, croppedUrl)}
          onCancel={() => setTempImageForCrop(null)}
        />
      )}

      <input
        ref={fileInputRef}
        type="file"
        name={name}
        multiple={multiple}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {(!multiple && images.length === 1) ? null : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl cursor-pointer transition p-4 text-center ${
            isDragging
              ? 'border-blue-500 bg-blue-50/80 scale-[0.99]'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50/50'
          }`}
        >
          <div className="p-2 bg-blue-50 text-blue-600 rounded-full mb-1.5">
            <UploadCloud className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold text-gray-700">
            {multiple ? 'Arraste e solte fotos aqui' : 'Arraste a imagem para o banner'}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            ou <span className="text-blue-600 underline font-medium">clique para buscar</span>
          </p>
        </div>
      )}

      {/* Exibição da Imagem Selecionada/Cortada */}
      {images.length > 0 && (
        <div className={multiple ? "flex flex-wrap gap-3 pt-1" : "w-full"}>
          {images.map((img) => (
            <div
              key={img.id}
              className={`relative rounded-xl border border-gray-200 shadow-sm bg-gray-100 overflow-hidden ${
                multiple ? 'h-20 w-20' : 'h-40 w-full'
              }`}
            >
              <img
                src={img.url}
                alt="Banner cortado"
                className="h-full w-full object-cover"
              />

              {/* Botão de reajustar corte */}
              {!multiple && img.url && (
                <button
                  type="button"
                  onClick={() => setTempImageForCrop(img.url)}
                  className="absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-black/80 transition"
                >
                  <Crop className="h-3.5 w-3.5" /> Reajustar Corte
                </button>
              )}

              {/* Botão X Vermelho de Remoção */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removerImagem(img.id);
                }}
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 hover:scale-110 active:scale-95 transition"
                title="Remover imagem"
              >
                <X className="h-4 w-4 stroke-[3]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}