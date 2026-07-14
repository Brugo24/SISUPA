import { Projeto } from "@/prisma/lib/generated/prisma-client/client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({projeto} : {projeto : Projeto}){
    return(
        <Link className="w-90 h-100 rounded-md grid grid-cols-1 grid-rows-2 overflow-hidden border-3 border-gray-400" href={`/projetos/${projeto.id}`}>
            <div className="w-full h-full relative">
                <Image
                className="object-cover"
                src={projeto.banner || '/placeholder/placeholder_banner.jpg'}
                alt="Banner do projeto"
                fill
                unoptimized
                />
            </div>
            <div className="">
                <div className="rounded-full border-2 border-gray-400 w-fit overflow-hidden -mt-16 relative z-10 mx-auto">
                    <Image 
                    className="object-cover"
                    src={projeto.foto || `https://ui-avatars.com/api/?name=${projeto.nome}&background=0D8ABC&color=fff&size=128`}
                    alt="Foto do projeto"
                    width={120}
                    height={120}
                    unoptimized
                    />  
                </div>
                <p className="text-center text-2xl font-bold">{projeto.nome}</p>
            </div>
        </Link>
    )
}