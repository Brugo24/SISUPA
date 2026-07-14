import { fetchProjetoPorId } from "@/app/lib/data"
import Image from "next/image";

export default async function PaginaProjeto(props: {params: Promise<{id : string}>}){
    const id = (await props.params).id;
    const projeto = await fetchProjetoPorId(id);

    return(
        <div className="w-2/3">
            <div className="overflow-hidden relative top-0 h-40 m-5 rounded-2xl border border-gray-300">
                <Image
                className="object-cover" 
                src={projeto?.banner || '/placeholder/placeholder_banner.jpg'}
                alt="Banner do Projeto"
                unoptimized
                fill
                />
            </div>
            <div className="rounded-full border-2 border-gray-400 w-fit overflow-hidden -mt-26 relative z-10 ml-15">
                <Image 
                className="object-cover"
                src={projeto?.foto || `https://ui-avatars.com/api/?name=${projeto?.nome}&background=0D8ABC&color=fff&size=128`}
                alt="Foto do Projeto"
                unoptimized
                width={150}
                height={120}
                />
            </div>
            <h2 className="text-2xl font-bold ml-10 mt-8">{projeto?.nome}</h2>
            <p className="ml-10 mt-2">{projeto?.descricao}</p>
        </div>
    )
}