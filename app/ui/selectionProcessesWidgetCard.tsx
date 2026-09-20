'use client'

import { useState } from "react";
import { ProcessWithProject } from "../lib/definitions";
import SelectionProcessModal from "./selectionProcessModal";
import Image from "next/image";
import { CalendarDaysIcon, LinkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function SelectionProcessesWidgetCard({selectionProcess} : {selectionProcess : ProcessWithProject}){

    const [modal, setModal] = useState<boolean>(false);

    return(
        <div>
            <button className="flex flex-row border border-gray-400 rounded-md w-full shadow-md hover: cursor-pointer" onClick={() => setModal(true)}>
                <div className="rounded-full w-fit border-2 border-gray-400 overflow-hidden ml-2 my-auto">
                    <Image 
                        className="object-cover"
                        src={selectionProcess.projeto.foto || `https://ui-avatars.com/api/?name=${selectionProcess.projeto.nome}&background=0D8ABC&color=fff&size=128`}
                        alt="Foto do projeto"
                        width={50} 
                        height={50}
                        unoptimized
                    />  
                </div>
                <div className="ml-2 w-full">
                    <p className="text-left text-md font-bold line-clamp-1">{selectionProcess.titulo}</p>
                    <div className="flex flex-row">
                        <CalendarDaysIcon className="w-4 mr-2"/>
                        <p>{`Data Limite: ${selectionProcess.dataLimite.toLocaleDateString('pt-BR')}`}</p>
                    </div>
                    <div className="flex flex-row">
                        <LinkIcon className="w-4 mr-2"/>
                        <Link href={selectionProcess.inscricao} className="underline text-blue-600 line-clamp-1" onClick={(e) => {e.stopPropagation()}}>{selectionProcess.inscricao}</Link>
                    </div>
                </div>
            </button>
            {modal && (
                <SelectionProcessModal
                    process={selectionProcess}
                    setModal={setModal}
                />
            )}
        </div>
    )
}