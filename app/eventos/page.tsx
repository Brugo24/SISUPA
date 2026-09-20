import EventScroll from "../ui/eventScroll"
import SearchBar from "../ui/searchbar"

export default async function Eventos(props: {
    searchParams?: Promise<{
        query?: string
    }>;
}){
    const params = await props.searchParams;
    const query = params?.query || '';

    return(
        <div className="p-4 gap-4">
            <SearchBar placeholder="Pesquise seu projeto..."/>
            <EventScroll query={query}/>
        </div>
    )
}