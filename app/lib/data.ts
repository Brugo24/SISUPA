'use server';
import { Projeto } from "@/prisma/lib/generated/prisma-client/client";
import { PostComProjeto} from "./definitions";
import { prisma } from "./prisma";

export async function fetchPosts(idAtual : string) {
    const data : PostComProjeto[] = await prisma.post.findMany({
        take: 5,
        skip: 1,
        cursor:{
            id: idAtual
        },
        include:{
            projeto:{
                select: {
                    foto: true,
                    nome: true
                }
            }
        },
        orderBy:{
            postadoEm:"desc"
        }
    });

    return data;
}

export async function fetchPostsIniciais() {
    const data : PostComProjeto[] = await prisma.post.findMany({
        take: 5,
        include:{
            projeto:{
                select: {
                    foto: true,
                    nome: true
                }
            }
        },
        orderBy: {
            postadoEm: "desc"
        }
    });

    return data;
}

export async function fetchProjetosIniciais(query:string) {
    const data : Projeto[] = await prisma.projeto.findMany({
        where:{
            nome:{
                contains: query,
                mode: "insensitive"
            }
        },
        take: 9,
        orderBy:{
            nome: "asc"
        }
    })

    return data;
}

export async function fetchProjetos(query : string, idAtual: string) {
    const data : Projeto[] = await prisma.projeto.findMany({
        where:{
            nome:{
                contains: query,
                mode: "insensitive"
            }
        },
        take: 9,
        skip: 1,
        cursor:{
            id: idAtual
        },
        orderBy:{
            nome:"asc"
        }
    })

    return data;
}