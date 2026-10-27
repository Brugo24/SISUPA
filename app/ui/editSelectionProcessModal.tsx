'use client';

import { criarProcessoSeletivoAction, editarProcessoSeletivoAction } from "@/app/lib/actions";
import { ProcessoSeletivo } from "@/prisma/lib/generated/prisma-client/browser";
import { X, Calendar, Link as LinkIcon } from 'lucide-react';
import ImageDropzone from "./imageDropZone";

function formatarDataParaInput(data: Date | undefined): string {
  if (!data) return '';
  const d = new Date(data);
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

export default function EditSelectionProcessModal({
  setModal,
  currentProcess,
}: {
  setModal: (open: boolean) => void;
  currentProcess?: ProcessoSeletivo;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Cabeçalho Fixo */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 shrink-0">
          <h3 className="text-lg font-bold text-gray-900">
            {currentProcess ? "Editar Processo Seletivo" : "Novo Processo Seletivo"}
          </h3>
          <button
            type="button"
            onClick={() => setModal(false)}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:cursor-pointer transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Formulário com Scroll Vertical */}
        <form
          action={async (formData) => {
            if (currentProcess) {
              await editarProcessoSeletivoAction(formData);
            } else {
              await criarProcessoSeletivoAction(formData);
            }
            setModal(false);
          }}
          className="p-6 space-y-4 overflow-y-auto flex-1"
        >
          <input type="hidden" name="id" value={currentProcess?.id || ''} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Título</label>
            <input
              type="text"
              name="titulo"
              defaultValue={currentProcess?.titulo}
              placeholder="Ex: Trainee de Desenvolvimento 2026"
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Link de Inscrição / Edital</label>
              <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-200">
                <LinkIcon className="h-4 w-4 text-gray-400" />
                <input
                  type="url"
                  name="inscricao"
                  defaultValue={currentProcess?.inscricao}
                  placeholder="https://forms.gle/..."
                  required
                  className="w-full text-sm outline-none bg-transparent text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Data Limite</label>
              <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-200">
                <Calendar className="h-4 w-4 text-gray-400" />
                <input
                  type="date"
                  name="dataLimite"
                  defaultValue={formatarDataParaInput(currentProcess?.dataLimite)}
                  required
                  className="w-full text-sm outline-none bg-transparent text-gray-900"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Descrição do Processo</label>
            <textarea
              name="descricao"
              rows={5}
              defaultValue={currentProcess?.descricao}
              placeholder="Descreva os requisitos, etapas e benefícios da oportunidade..."
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            />
          </div>

          {/* Campo de Upload / Dropzone de Imagem Única */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Imagem / Banner do Processo Seletivo (Opcional)
            </label>
            <ImageDropzone
              name="banner"
              multiple={false}
              defaultImage={(currentProcess as any)?.banner || (currentProcess as any)?.imagem}
            />
          </div>

          {/* Rodapé com Botões */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setModal(false)}
              className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:cursor-pointer transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 hover:cursor-pointer transition shadow-sm"
            >
              {currentProcess ? "Salvar Alterações" : "Criar Processo"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}