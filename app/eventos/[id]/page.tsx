import { fetchEventByID } from "@/app/lib/data";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import BannerModalButton from "@/app/ui/BannerModalButton";
import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";

export default async function EventPage(props: {params: Promise<{id : string}>}){
    const id = (await props.params).id;
    const event = await fetchEventByID(id);
    const bannerImg = [event?.banner || '/placeholder/placeholder_banner.jpg'];

    return(
        <div className="w-full flex flex-row">
            <article className="prose max-w-none p-4 w-2/3 text-lg leading-relaxed">
                <ReactMarkdown
                components={{
                    img: ({ src, alt }) => {
                        if (!src || typeof src !== 'string') return null;

                        return (
                            <BannerModalButton image={src}/>
                        );
                    },
                }}
                >{event?.descricao}</ReactMarkdown>
            </article>
            <div className="w-1/3 m-2 p-2 mt-4 h-full text-lg outline rounded-2xl">
                <div className="flex flex-row">
                    <MapPinIcon className="w-4 mr-2"/>
                    <p>{event?.local}</p>
                </div>
                <div className="flex flex-row">
                    <CalendarDaysIcon className="w-4 mr-2"/>
                    <p>{event?.data.toDateString()}</p>
                </div>
                <div className="flex flex-row">
                    <ClockIcon className="w-4 mr-2"/>
                    <p>{event?.horario.toTimeString()}</p>
                </div>
            </div>
        </div>
    )
}