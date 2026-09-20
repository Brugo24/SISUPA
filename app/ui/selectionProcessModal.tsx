'use client'
import ReactMarkdown from 'react-markdown';
import BannerModalButton from './BannerModalButton';
import Image from "next/image";
import { createPortal } from "react-dom";
import { ProcessWithProject } from "../lib/definitions";
import Link from 'next/link';
import { CalendarDaysIcon, LinkIcon } from "@heroicons/react/16/solid";
import ModalDeImagens from './modalImagens';

export default function SelectionProcessModal({process, setModal}: {
    process : ProcessWithProject,
    setModal : Function
}){

    const conteudoModal = (
        <div className="fixed flex items-center bg-black/85 inset-0 justify-center z-20" onClick={() => {setModal(false)}}>
            <div className="w-2/3 max-h-[98%] rounded-md bg-gray-100 flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className='p-4 overflow-y-auto flex-1'>
                    <div className='flex flex-row'>
                        <div className="rounded-full border-2 border-gray-400 w-fit overflow-hidden relative z-10 mx-3 row-span-7 my-auto">
                            <Image 
                            className="object-cover"
                            src={process.projeto.foto || `https://ui-avatars.com/api/?name=${process.projeto.nome}&background=0D8ABC&color=fff&size=128`}
                            alt="Foto do projeto"
                            width={80}
                            height={80}
                            unoptimized
                            />  
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="font-bold text-2xl">{process.titulo}</p>
                            <p className="text-xs">{process.projeto.nome}</p>
                            <div className="flex flex-row">
                                <CalendarDaysIcon className="w-4 mr-2"/>
                                <p>{`Data Limite: ${process.dataLimite.toLocaleDateString('pt-BR')}`}</p>
                            </div>
                            <div className="flex flex-row">
                                <LinkIcon className="w-4 mr-2"/>
                                <p>Link da inscrição:</p>
                                <Link href={process.inscricao} className="underline text-blue-600 line-clamp-1" onClick={(e) => {e.stopPropagation()}}>{process.inscricao}</Link>
                            </div>
                        </div>
                    </div>
                    <article className="prose max-w-none text-lg leading-relaxed mt-4 wrap-break-word p-3">
                        <ReactMarkdown
                        components={{
                            img: ({ src, alt }) => {
                                if (!src || typeof src !== 'string') return null;
                                return (
                                    <BannerModalButton image={src} isBanner={false}/>
                                );
                            },
                        }}
                        >{process.descricao}</ReactMarkdown>
                    </article>
                </div>
            </div>
        </div>
    );

    return createPortal(conteudoModal,document.body);
}