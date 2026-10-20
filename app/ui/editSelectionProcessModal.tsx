'use client';

import { criarProcessoSeletivoAction, editarProcessoSeletivoAction } from "@/app/lib/actions";
import { ProcessoSeletivo } from "@/prisma/lib/generated/prisma-client/browser";
import { X, Calendar, Link as LinkIcon } from 'lucide-react';

function formatarDataParaInput(data: Date | undefined): string {
  if (!data) return '';
  const d = new Date(data);
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}


export default function EditSelectionProcessModal({setModal, currentSelectionProcess} : {
    setModal : Function,
    currentSelectionProcess?: ProcessoSeletivo
}) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
        
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Editar Processo Seletivo</h3>
          <button onClick={() => setModal(false)} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          action={async (formData) => {
            if (currentSelectionProcess) {
                await editarProcessoSeletivoAction(formData);
            } else {
                await criarProcessoSeletivoAction(formData);
            }
            setModal(false);
          }}
          className="p-6 space-y-4"
        >
          <input type="hidden" name="id" value={currentSelectionProcess?.id} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Título</label>
            <input
              type="text"
              name="titulo"
              defaultValue={currentSelectionProcess?.titulo}
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Descrição</label>
            <textarea
              name="descricao"
              rows={3}
              defaultValue={currentSelectionProcess?.descricao}
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Inscrição (Link ou Instruções)</label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2">
              <LinkIcon className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="inscricao"
                defaultValue={currentSelectionProcess?.inscricao}
                placeholder="https://forms.gle/..."
                required
                className="w-full text-sm outline-none bg-transparent text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Data Limite</label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <input
                type="date"
                name="dataLimite"
                defaultValue={formatarDataParaInput(currentSelectionProcess?.dataLimite)}
                required
                className="w-full text-sm outline-none bg-transparent text-gray-900 hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={() => setModal(false)} className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:cursor-pointer">
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