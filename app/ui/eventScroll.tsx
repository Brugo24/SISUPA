'use client'
import EventCard from "./eventCard";
import { useState, useEffect } from "react";
import { EventoComProjeto } from "../lib/definitions";
import { fetchInitialEvents, fetchEvents } from "../lib/data";
import ObserverTarget from "./observer";

export default function EventScroll() {

    const [events, setEvents] = useState<EventoComProjeto[]>([]);
    const [lastId, setLastId] = useState<string>();

    useEffect(() => {
        async function loadInitialEvents(){
            const initialEvents = await fetchInitialEvents();
            if(initialEvents.length > 0){
                setEvents(initialEvents);
                setLastId(initialEvents[initialEvents.length-1].id);
            }
        }

        loadInitialEvents();
    },[])

    async function loadMoreEvents(){
        if(!lastId) return;
        const newEvents = await fetchEvents(lastId);

        if(newEvents.length > 0){
            setEvents([...events, ...newEvents]);
            setLastId(newEvents[newEvents.length-1].id);
        }
    }

    return(
        <div className="flex flex-row gap-4 flex-wrap">
            {events.map((event) => {
                return(
                    <EventCard event={event}/>
                )
            })}
            <ObserverTarget onIntersect={loadMoreEvents}/>
        </div>
    )
}