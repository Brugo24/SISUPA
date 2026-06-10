import { prisma } from "./prisma";

export async function fetchPosts() {
    const data = prisma.post.findUnique({
        where: {id: 1},
    });

    return data;
}