import EventScroll from "@/app/ui/eventScroll"
import SearchBar from "@/app/ui/searchbar";

export default async function Eventos({params} : { 
    params : Promise<{id : string}>
}){
    const id = await (await params).id

    return(
        <div className="p-4 gap-4">
            <EventScroll id={id}/>
        </div>
    )
}