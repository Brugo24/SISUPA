'use server'

import Link from "next/link";
import { fetchEventsforWidget } from "../lib/data"
import { EventoComProjeto } from "../lib/definitions";
import EventWidgetCard from "./eventWidgetCard";

export default async function EventsWidget(){
    const events : EventoComProjeto[] = await fetchEventsforWidget();
    return(
        <div className= "rounded-md border border-gray-700 flex flex-col w-full h-fit p-2 mb-6">
            <h1 className="font-bold text-2xl mb-2">Eventos próximos</h1>
            {events.map((event, index) => {
                return(
                    <div className="mb-2">
                        <EventWidgetCard event={event} key={index}/>
                    </div>
                )
            })}
            <Link href="/eventos" className="text-gray-400 hover:underline text-right mt-2 mr-2 hover:cursor-pointer">Ver mais...</Link>
        </div> 
    )
}