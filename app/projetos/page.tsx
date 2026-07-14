import { fetchProjetos } from "../lib/data"
import ProjectScroll from "../ui/project-scroll";
import SearchBar from "../ui/searchbar"

export default async function Projetos(props: {
    searchParams?: Promise<{
        query?: string
    }>;
}){
    const params = await props.searchParams;
    const query = params?.query || '';

    return(
        <div className="p-8">
            <SearchBar placeholder="Pesquise seu projeto..."/>
            <ProjectScroll query={query}/>
        </div>
    )
}