import { fetchEventByID } from "@/app/lib/data";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import BannerModalButton from "@/app/ui/BannerModalButton";
import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";
import EventsWidget from "@/app/ui/eventsWidget";
import ProcessesWidget from "@/app/ui/processesWidget";

export default async function EventPage(props: {params: Promise<{id : string}>}){
    const id = (await props.params).id;
    const event = await fetchEventByID(id);
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

    return(
        <div className="w-full flex flex-row">
            <div className="p-4 w-2/3">
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
            <div className=" flex flex-col ml-3 w-1/3 h-fit p-4">
                {/*Componente vagas novas*/}
                <EventsWidget/>
                {/*Componente vagas se encerrando*/}
                <ProcessesWidget/>
            </div>
        </div>
    )
}