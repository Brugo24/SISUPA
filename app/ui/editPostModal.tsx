'use client';

import { criarPostAction, editarPostAction } from "@/app/lib/actions";
import { Post } from "@/prisma/lib/generated/prisma-client/client";
import { X, Upload } from 'lucide-react';

interface PostSchema {
  id: string;
  titulo: string;
  corpo: string;
  status: string;
  imagens?: string | null;
}

export default function EditPostModal({setModal, currentPost} : {
    setModal : Function,
    currentPost?: Post
}) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
        
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Editar Postagem</h3>
          <button onClick={() => {setModal(false)}} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          action={async (formData) => {
            if(currentPost) {
                await editarPostAction(formData);
            } else {
                await criarPostAction(formData);
            }
            setModal(false);
          }}
          className="p-6 space-y-4"
        >
          <input type="hidden" name="id" value={currentPost?.id} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Título</label>
            <input
              type="text"
              name="titulo"
              defaultValue={currentPost?.titulo}
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
            <select
              name="status"
              defaultValue={currentPost?.status || "PUBLICADO"}
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none"
            >
              <option value="PUBLICADO">Publicado</option>
              <option value="RASCUNHO">Rascunho</option>
              <option value="ARQUIVADO">Arquivado</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Corpo da Postagem</label>
            <textarea
              name="corpo"
              rows={4}
              defaultValue={currentPost?.corpo}
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">URL da Imagem (Opcional)</label>
            <input
              type="text"
              name="imagens"
              defaultValue={currentPost?.imagens || ''}
              placeholder="https://link-da-imagem.com/foto.jpg"
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={() => {setModal(false)}} className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:cursor-pointer">
              Cancelar
            </button>
            <button type="submit" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 hover:cursor-pointer">
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}