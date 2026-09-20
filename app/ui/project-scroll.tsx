'use client'
import ProjectCard from "./projectCard"
import { Projeto } from "@/prisma/lib/generated/prisma-client/client";
import { fetchProjetos, fetchProjetosIniciais } from "../lib/data";
import { useEffect, useState } from "react";
import ObserverTarget from "./observer";

export default function ProjectScroll({query} : {query : string}) {

    const[projetos,setProjetos] = useState<Projeto[]>([]);
    const[idUltimoProjeto, setIdUltimoProjeto] = useState<string>();

    useEffect(() => {
        async function carregarProjetosIniciais() {
            setProjetos([]);
            setIdUltimoProjeto(undefined);

            const projetosIniciais = await fetchProjetosIniciais(query);
            setProjetos(projetosIniciais);

            if(projetosIniciais.length > 0){
                setIdUltimoProjeto(projetosIniciais[projetosIniciais.length - 1].id);
            }
        }

        carregarProjetosIniciais();
    },[query])

    async function carregarProjetos() {
        if(!idUltimoProjeto) return;
        const projetosNovos = await fetchProjetos(query, idUltimoProjeto);

        if(projetosNovos.length > 0){
            setProjetos([...projetos,...projetosNovos]);
            setIdUltimoProjeto(projetosNovos[projetosNovos.length - 1].id);
        }
    }

    return(
        <div className="mt-6 flex flex-1 flex-row flex-wrap">
            {projetos && projetos.map((projeto,index) => {
                return (<div className="m-3" key={index}>
                    <ProjectCard projeto={projeto}/>
                </div>)
            })}
            <ObserverTarget onIntersect={carregarProjetos}/>
        </div>
    )
}