import { Post } from "@/prisma/lib/generated/prisma-client/client";
import { Prisma } from "@/prisma/lib/generated/prisma-client/client";

export type PostComProjeto = Prisma.PostGetPayload<{
    include: {
        projeto:{
            select:{
                nome: true,
                foto: true,
            }
        }
    }
}>

export type ImagemMedia = Prisma.PostGetPayload<{
    select:{
        imagens: true,
        id: true
    }
}>