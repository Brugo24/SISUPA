import { EventoComProjeto } from "../lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";

export default function EventCard({event} : {event: EventoComProjeto}){
    return(
        <Link className="w-100 h-45 rounded-md grid grid-cols-1 grid-rows-10 overflow-hidden border-3 border-gray-400" href={`/eventos/${event.id}`}>
            <div className="w-full h-full relative row-span-3">
                <Image
                className="object-cover"
                src={event.banner || '/placeholder/placeholder_banner.jpg'}
                alt="Banner do projeto"
                fill
                unoptimized
                />
            </div>
            <div className="">
                <div className="rounded-full border-2 border-gray-400 w-fit overflow-hidden relative z-10 ml-3 -mt-10 row-span-7">
                    <Image 
                    className="object-cover"
                    src={event.projeto.foto || `https://ui-avatars.com/api/?name=${event.projeto.nome}&background=0D8ABC&color=fff&size=128`}
                    alt="Foto do projeto"
                    width={50}
                    height={50}
                    unoptimized
                    />  
                </div>
                <div className="ml-2">
                    <p className="text-left text-lg font-bold">{event.nome}</p>
                    <div className="flex flex-row">
                        <MapPinIcon className="w-4 mr-2"/>
                        <p>{event.local}</p>
                    </div>
                    <div className="flex flex-row">
                        <CalendarDaysIcon className="w-4 mr-2"/>
                        <p>{event.data.toDateString()}</p>
                    </div>
                    <div className="flex flex-row">
                        <ClockIcon className="w-4 mr-2"/>
                        <p>{event.horario.toTimeString()}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}