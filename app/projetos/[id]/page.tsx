import { redirect } from "next/navigation";

export default async function PaginaProjeto(props: {params: Promise<{id : string}>}){
    const id = (await props.params).id

    redirect(`/projetos/${id}/posts`);
    
}