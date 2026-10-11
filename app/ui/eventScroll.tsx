'use client'
import EventCard from "./eventCard";
import { useState, useEffect } from "react";
import { EventoComProjeto } from "../lib/definitions";
import { fetchInitialEvents, fetchEvents } from "../lib/data";
import ObserverTarget from "./observer";

export default function EventScroll({query, id} : {query? : string, id? : string}) {

    const [events, setEvents] = useState<EventoComProjeto[]>([]);
    const [lastId, setLastId] = useState<string>();

    useEffect(() => {
        async function loadInitialEvents(){
            setEvents([]);
            setLastId(undefined);

            const initialEvents = await fetchInitialEvents(query, id);
            if(initialEvents.length > 0){
                setEvents(initialEvents);
                setLastId(initialEvents[initialEvents.length-1].id);
            }
        }

        loadInitialEvents();
    },[query])

    async function loadMoreEvents(){
        if(!lastId) return;
        const newEvents = await fetchEvents(lastId, query, id);

        if(newEvents.length > 0){
            setEvents([...events, ...newEvents]);
            setLastId(newEvents[newEvents.length-1].id);
        }
    }

    return(
        <div className={`flex-row gap-4 flex-wrap grid ${id ? 'grid-cols-2' : 'grid-cols-3'} `} >
            {events.map((event,index) => {
                return(
                    <EventCard event={event} key={index}/>
                )
            })}
            <ObserverTarget onIntersect={loadMoreEvents}/>
        </div>
    )
}