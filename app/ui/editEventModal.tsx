'use client';

import { criarEventoAction, editarEventoAction } from "@/app/lib/actions";
import { Evento } from "@/prisma/lib/generated/prisma-client/browser";
import { X, Calendar, Clock, MapPin } from 'lucide-react';
import ImageDropzone from "./imageDropZone";

function formatarDataParaInput(data: Date | undefined): string {
  if (!data) return '';
  const d = new Date(data);
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function formatarHoraParaInput(data: Date | undefined): string {
  if (!data) return '';
  const d = new Date(data);
  const horas = String(d.getHours()).padStart(2, '0');
  const minutos = String(d.getMinutes()).padStart(2, '0');
  return `${horas}:${minutos}`;
}

export default function EditEventModal({ setModal, currentEvent }: {
  setModal: Function;
  currentEvent?: Evento;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      {/* 1. Modal mais largo (max-w-2xl) e estruturado com altura máxima flexível */}
      <div className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Cabeçalho Fixo (shrink-0) */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 shrink-0">
          <h3 className="text-lg font-bold text-gray-900">
            {currentEvent ? "Editar Evento" : "Novo Evento"}
          </h3>
          <button
            type="button"
            onClick={() => setModal(false)}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:cursor-pointer transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Formulário com Scroll Vertical (overflow-y-auto flex-1) */}
        <form
          action={async (formData) => {
            if (currentEvent) {
              await editarEventoAction(formData);
            } else {
              await criarEventoAction(formData);
            }
            setModal(false);
          }}
          className="p-6 space-y-4 overflow-y-auto flex-1"
        >
          <input type="hidden" name="id" value={currentEvent?.id || ''} />

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  defaultValue={formatarHoraParaInput(currentEvent?.horario)}
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

          {/* Banner com Dropzone de Imagem Única */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Banner do Evento</label>
            <ImageDropzone
              name="banner"
              multiple={false}
              defaultImage={currentEvent?.banner}
            />
          </div>

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
              {currentEvent ? "Salvar Alterações" : "Criar Evento"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}