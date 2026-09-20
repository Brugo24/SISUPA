'use client'
import Link from "next/link";
import { ProcessWithProject } from "../lib/definitions";
import Image from "next/image";
import { CalendarDaysIcon, LinkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import SelectionProcessModal from "./selectionProcessModal";

export default function SelectionProcessCard({process} : {process: ProcessWithProject}){

    const[modal,setModal] = useState<boolean>(false);

    return(
         <div className="w-140 h-35 rounded-md overflow-hidden border-3 border-gray-400 flex flex-row">
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
                <p className="font-bold text-2xl line-clamp-1">{process.titulo}</p>
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
                <button onClick={() => {setModal(true)}} className="text-gray-400 hover:underline text-right mt-2 mr-2 hover:cursor-pointer">Ver mais...</button>
            </div>
            {modal && (
                <SelectionProcessModal
                process={process}
                setModal={setModal}
                />
            )}
        </div>
    )
}