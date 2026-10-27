'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';

// Importação dinâmica para evitar conflitos de renderização no servidor (SSR)
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

interface Props {
  name: string; // Nome do campo lido pela Server Action (ex: "descricao" ou "corpo")
  defaultValue?: string;
  placeholder?: string;
}

export default function MarkdownEditor({ name, defaultValue = '', placeholder }: Props) {
  const [value, setValue] = useState(defaultValue);

  // Permite colar (Ctrl+V) ou arrastar imagens diretamente no meio do texto
  const handlePasteOrDrop = (e: React.ClipboardEvent<HTMLDivElement> | React.DragEvent<HTMLDivElement>) => {
    const items = 'clipboardData' in e ? e.clipboardData?.files : e.dataTransfer?.files;
    if (!items || items.length === 0) return;

    const file = Array.from(items).find((f) => f.type.startsWith('image/'));
    if (file) {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        // Insere a tag de imagem Markdown onde o texto parou
        const markdownImage = `\n![imagem](${base64})\n`;
        setValue((prev) => prev + markdownImage);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div data-color-mode="light" className="w-full">
      {/* 🚀 O segredo para funcionar com Server Actions:
          Mantém o valor do Markdown sincronizado com este input invisível */}
      <input type="hidden" name={name} value={value} />

      <div 
        onPaste={handlePasteOrDrop}
        onDrop={handlePasteOrDrop}
        className="rounded-xl overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-200"
      >
        <MDEditor
          value={value}
          onChange={(val) => setValue(val || '')}
          height={280}
          preview="live" // Opções: 'live' (dividido), 'edit' (apenas edição), 'preview' (apenas pré-visualização)
          textareaProps={{
            placeholder: placeholder || 'Escreva em Markdown... (Suporta imagens via Ctrl+V ou arrastar)',
          }}
        />
      </div>
    </div>
  );
}