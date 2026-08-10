import { fetchProjetoPorId } from "@/app/lib/data"
import ReactMarkdown from 'react-markdown';

export default async function Apresentação({params} : {params: Promise<{id : string}>}){
    const id = (await params).id
    const projeto = await fetchProjetoPorId(id);
    return(
        <div className="p-6 rounded-xl shadow-md">
            <article className="prose prose-slate max-w-none">
                <ReactMarkdown>{projeto?.descricao}</ReactMarkdown>
            </article>
    </div>
    )
}