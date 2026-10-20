import ProcessesScroll from "../ui/processesScroll";
import SearchBar from "../ui/searchbar";

export default async function Vagas(props: {
    searchParams?: Promise<{
        query?: string
    }>;
}){

    const params = await props.searchParams;
    const query = params?.query || '';

    return(
        <div>
            <div className="p-8">
                <SearchBar placeholder="Pesquise seu Processo Seletivo..."/>
                <ProcessesScroll query={query}/>
            </div>
        </div>
    )
}