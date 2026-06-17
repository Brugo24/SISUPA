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