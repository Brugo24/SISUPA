'use client'

import { useState } from "react";
import { EventoComProjeto } from "../lib/definitions";
import EventModal from "./eventModal";
import Image from "next/image";
import { ClockIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";

export default function EventWidgetCard({event} : {event : EventoComProjeto}){

    const [modal, setModal] = useState<boolean>(false);

    const horario = new Date(event.horario).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
        });

    const diaDaSemana = new Date(event.data).toLocaleDateString('pt-BR', {
        weekday: 'long',
        timeZone: 'UTC'
        });

    return(
        <div>
            <button className="flex flex-row border border-gray-400 rounded-md w-full shadow-md hover: cursor-pointer" onClick={() => setModal(true)}>
                <div className="rounded-full w-fit border-2 border-gray-400 overflow-hidden ml-2 my-auto">
                    <Image 
                        className="object-cover"
                        src={event.projeto.foto || `https://ui-avatars.com/api/?name=${event.projeto.nome}&background=0D8ABC&color=fff&size=128`}
                        alt="Foto do projeto"
                        width={50} 
                        height={50}
                        unoptimized
                    />  
                </div>
                <div className="ml-2 w-full">
                    <p className="text-left text-md font-bold line-clamp-1">{event.nome}</p>
                    <div className="flex flex-row">
                        <CalendarDaysIcon className="w-4 mr-2"/>
                        <p>{diaDaSemana} {event.data.toLocaleDateString('pt-BR')}</p>
                    </div>
                    <div className="flex flex-row">
                        <ClockIcon className="w-4 mr-2"/>
                        <p>{horario}</p>
                    </div>
                </div>
            </button>
            {modal && (
                <EventModal 
                    event={event}
                    setModal={setModal}
                />
            )}
        </div>
    )
}