'use client';

import { criarEventoAction, editarEventoAction } from "@/app/lib/actions";
import { Evento } from "@/prisma/lib/generated/prisma-client/browser";
import { X, Calendar, Clock, MapPin } from 'lucide-react';

function formatarDataParaInput(data: Date | undefined): string {
  if (!data) return '';
  const d = new Date(data);
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

export default function EditEventModal({setModal, currentEvent} : {
    setModal : Function,
    currentEvent?: Evento
}) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
        
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Editar Evento</h3>
          <button onClick={() => setModal(false)} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          action={async (formData) => {
            if (currentEvent) {
                await editarEventoAction(formData);
            } else {
                await criarEventoAction(formData);
            }
            setModal(false);
          }}
          className="p-6 space-y-4"
        >
          <input type="hidden" name="id" value={currentEvent?.id} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nome do Evento</label>
            <input
              type="text"
              name="nome"
              defaultValue={currentEvent?.nome}
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Data</label>
              <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <input
                  type="date"
                  name="data"
                  defaultValue={formatarDataParaInput(currentEvent?.data)}
                  required
                  className="w-full text-sm outline-none bg-transparent text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Horário</label>
              <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <input
                  type="time"
                  name="horario"
                  defaultValue={formatarDataParaInput(currentEvent?.horario)}
                  required
                  className="w-full text-sm outline-none bg-transparent text-gray-900"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Local</label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="local"
                defaultValue={currentEvent?.local}
                required
                className="w-full text-sm outline-none bg-transparent text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Descrição</label>
            <textarea
              name="descricao"
              rows={3}
              defaultValue={currentEvent?.descricao}
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">URL do Banner (Opcional)</label>
            <input
              type="text"
              name="banner"
              defaultValue={currentEvent?.banner || ''}
              placeholder="https://link-da-imagem.com/banner.jpg"
              className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={() => setModal(false)} className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:cursor-pointer">
              Cancelar
            </button>
            <button type="submit" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 hover:cursor-pointer">
              Salvar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}