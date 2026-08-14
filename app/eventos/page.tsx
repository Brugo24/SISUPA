import EventCard from "../ui/eventCard"
import { fetchEventoComProjetoIniciais } from "../lib/data"

export default async function Eventos(){
    const event = await fetchEventoComProjetoIniciais();
    return(
        <div className="p-4">
            <EventCard event={event[0]}/>
        </div>
    )
}