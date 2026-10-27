'use client';

import Image from "next/image";
import BannerModalButton from "@/app/ui/BannerModalButton";
import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";
import { EventoComProjeto } from "../lib/definitions";
import { createPortal } from "react-dom";

export default function EventModal({
  event,
  setModal,
}: {
  event: EventoComProjeto;
  setModal: Function;
}) {
  const bannerImg = event?.banner || '/placeholder/placeholder_banner.jpg';

  const horario = new Date(event?.horario || '').toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  });

  const diaDaSemana = new Date(event?.data || '').toLocaleDateString('pt-BR', {
    weekday: 'long',
    timeZone: 'UTC',
  });

  const modalContent = (
    <div
      className="fixed flex items-center bg-black/85 inset-0 justify-center z-20"
      onClick={() => setModal(false)}
    >
      <div
        className="w-2/3 max-h-[98%] rounded-md bg-gray-100 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* Banner principal em destaque no topo */}
          {bannerImg && (
            <BannerModalButton image={bannerImg} isBanner={true} />
          )}

          {/* Dados do Projeto e Horários */}
          <div className="flex flex-row flex-1 my-4 items-center">
            <div className="rounded-full border-2 border-gray-400 w-20 h-20 overflow-hidden relative shrink-0">
              <Image
                className="object-cover"
                src={
                  event?.projeto.foto ||
                  `https://ui-avatars.com/api/?name=${event?.projeto.nome}&background=0D8ABC&color=fff&size=128`
                }
                alt="Foto do Projeto"
                unoptimized
                width={80}
                height={80}
              />
            </div>

            <div className="flex flex-col ml-5">
              <h2 className="text-2xl font-bold text-gray-900">{event?.projeto.nome}</h2>
              
              <div className="flex flex-row items-center text-sm text-gray-700 mt-1">
                <MapPinIcon className="w-4 h-4 mr-2 text-gray-500" />
                <p>{event?.local}</p>
              </div>

              <div className="flex flex-row items-center text-sm text-gray-700 mt-1">
                <CalendarDaysIcon className="w-4 h-4 mr-2 text-gray-500" />
                <p className="capitalize">
                  {diaDaSemana},{' '}
                  {event?.data ? new Date(event.data).toLocaleDateString('pt-BR') : ''}
                </p>
              </div>

              <div className="flex flex-row items-center text-sm text-gray-700 mt-1">
                <ClockIcon className="w-4 h-4 mr-2 text-gray-500" />
                <p>{horario}</p>
              </div>
            </div>
          </div>

          {/* Descrição em texto simples (sem Markdown) */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{event?.nome}</h2>
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
              {event?.descricao}
            </p>
          </div>

        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}