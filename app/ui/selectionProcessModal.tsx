'use client';

import BannerModalButton from './BannerModalButton';
import Image from "next/image";
import { createPortal } from "react-dom";
import { ProcessWithProject } from "../lib/definitions";
import Link from 'next/link';
import { CalendarDaysIcon, LinkIcon } from "@heroicons/react/16/solid";

export default function SelectionProcessModal({
  process,
  setModal,
}: {
  process: ProcessWithProject;
  setModal: Function;
}) {
  // Captura o banner ou imagem associada ao processo (se houver)
  const imagemProcesso = process.imagem || (process as any).imagem;

  const conteudoModal = (
    <div
      className="fixed flex items-center bg-black/85 inset-0 justify-center z-20"
      onClick={() => setModal(false)}
    >
      <div
        className="w-2/3 max-h-[98%] rounded-md bg-gray-100 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Cabeçalho do Modal */}
          <div className="flex flex-row">
            <div className="rounded-full border-2 border-gray-400 w-fit overflow-hidden relative z-10 mx-3 my-auto shrink-0">
              <Image
                className="object-cover"
                src={
                  process.projeto.foto ||
                  `https://ui-avatars.com/api/?name=${process.projeto.nome}&background=0D8ABC&color=fff&size=128`
                }
                alt="Foto do projeto"
                width={80}
                height={80}
                unoptimized
              />
            </div>

            <div className="flex flex-col w-full justify-center">
              <p className="font-bold text-2xl text-gray-900">{process.titulo}</p>
              <p className="text-xs text-gray-500 font-medium mb-1">{process.projeto.nome}</p>

              <div className="flex items-center text-sm text-gray-700">
                <CalendarDaysIcon className="w-4 h-4 mr-2 text-gray-500" />
                <p>{`Data Limite: ${new Date(process.dataLimite).toLocaleDateString('pt-BR')}`}</p>
              </div>

              <div className="flex items-center text-sm text-gray-700 mt-1">
                <LinkIcon className="w-4 h-4 mr-2 text-gray-500" />
                <p className="mr-1">Link da inscrição:</p>
                <Link
                  href={process.inscricao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 line-clamp-1 hover:text-blue-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  {process.inscricao}
                </Link>
              </div>
            </div>
          </div>

          {/* Corpo do Texto da Descrição */}
          <div className="p-3">
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
              {process.descricao}
            </p>

            {/* Imagem / Banner no Final do Texto */}
            {imagemProcesso && (
              <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <BannerModalButton image={imagemProcesso} isBanner={true} />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );

  return createPortal(conteudoModal, document.body);
}