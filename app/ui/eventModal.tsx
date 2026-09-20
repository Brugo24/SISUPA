import { fetchEventByID } from "@/app/lib/data";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import BannerModalButton from "@/app/ui/BannerModalButton";
import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";
import EventsWidget from "@/app/ui/eventsWidget";
import ProcessesWidget from "@/app/ui/processesWidget";
import { EventoComProjeto } from "../lib/definitions";
import { createPortal } from "react-dom";

export default function EventModal({event, setModal} : {
    event: EventoComProjeto,
    setModal: Function
}){

    const bannerImg = event?.banner || '/placeholder/placeholder_banner.jpg';

    const horario = new Date(event?.horario || '').toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
        });

    const diaDaSemana = new Date(event?.data || '').toLocaleDateString('pt-BR', {
        weekday: 'long',
        timeZone: 'UTC'
        });


    const modalContent = (
        <div className="fixed flex items-center bg-black/85 inset-0 justify-center z-20" onClick={() => {setModal(false)}}>
            <div className="w-2/3 max-h-[98%] rounded-md bg-gray-100 flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="p-4 overflow-y-auto">
                    <BannerModalButton image={bannerImg} isBanner={true}/>
                    <div className="flex flex-row flex-1 my-2">
                        <div className="rounded-full border-2 border-gray-400 w-25 h-25 overflow-hidden">
                            <Image 
                                className="object-cover"
                                src={event?.projeto.foto || `https://ui-avatars.com/api/?name=${event?.projeto.nome}&background=0D8ABC&color=fff&size=128`}
                                alt="Foto do Projeto"
                                unoptimized
                                width={1200}
                                height={0}
                            />
                        </div>
                        <div className="flex flex-col ml-5">
                            <h2 className="text-2xl font-bold">{event?.projeto.nome}</h2>
                            <div className="flex flex-row">
                                <MapPinIcon className="w-4 mr-2"/>
                                <p>{event?.local}</p>
                            </div>
                            <div className="flex flex-row">
                                <CalendarDaysIcon className="w-4 mr-2"/>
                                <p>{diaDaSemana} {event?.data.toLocaleDateString('pt-BR')}</p>
                            </div>
                            <div className="flex flex-row">
                                <ClockIcon className="w-4 mr-2"/>
                                <p>{horario}</p>
                            </div>
                        </div>
                    </div>
                    <article className="prose max-w-none text-lg leading-relaxed mt-5">
                        <h2 className="text-2xl font-bold">{event?.nome}</h2>
                        <ReactMarkdown
                        components={{
                            img: ({ src, alt }) => {
                                if (!src || typeof src !== 'string') return null;
                                return (
                                    <BannerModalButton image={src} isBanner={false}/>
                                );
                            },
                        }}
                        >{event?.descricao}</ReactMarkdown>
                    </article>
                </div>
            </div>
        </div>
    )

    return createPortal(modalContent, document.body);
}