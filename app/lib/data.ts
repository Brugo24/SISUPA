'use server';
import { PostComProjeto } from "./definitions";
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