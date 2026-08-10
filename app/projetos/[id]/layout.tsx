import { fetchProjetoPorId } from "@/app/lib/data"
import Image from "next/image";
import ProcessesWidget from "@/app/ui/processesWidget";
import EventsWidget from "@/app/ui/eventsWidget";
import ProjectNavBar from "@/app/ui/projectNavBar";
import { Children } from "react";

export default async function PaginaProjetoLayout({params, children}: {params: Promise<{id : string}>, children : React.ReactNode},){
    const id = (await params).id;
    const projeto = await fetchProjetoPorId(id);

    return(
        <div className="flex flex-row p-5">
            <div className="w-2/3">
                <div className="overflow-hidden relative top-0 h-40 rounded-2xl border border-gray-300">
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
                <h2 className="text-2xl font-bold ml-5 mt-8">{projeto?.nome}</h2>
                <p className="ml-5 mt-2">{projeto?.descricaoCurta}</p>
                <ProjectNavBar id={id}/>
                <div className="border-b border-gray-500 mt-1"></div>
                {children}
            </div>
            <div className=" flex flex-col ml-3 w-1/3 h-fit">
                {/*Componente vagas novas*/}
                <EventsWidget/>
                {/*Componente vagas se encerrando*/}
                <ProcessesWidget/>
            </div>
        </div>
    )
}