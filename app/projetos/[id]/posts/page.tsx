import { fetchProjetoPorId } from "@/app/lib/data"
import ProjectPostScroll from "@/app/ui/project-post-scroll"

export default async function ProjectPosts({params} : {params : Promise<{id : string}>}){
    const id = (await params).id

    return(
        <div>
            <ProjectPostScroll id={id}/>
        </div>
    )
}