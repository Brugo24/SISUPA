import { fetchProjetoPorId } from "@/app/lib/data"

export default async function Apresentação({params} : {params: Promise<{id : string}>}){
    const id = (await params).id
    const projeto = await fetchProjetoPorId(id);
    return(
        <div>
            <p>{projeto?.descricao}</p>
        </div>
    )
}