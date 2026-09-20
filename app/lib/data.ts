'use server';
import { Projeto } from "@/prisma/lib/generated/prisma-client/client";
import { PostComProjeto, ImagemMedia, EventoComProjeto, ProcessWithProject} from "./definitions";
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

export async function fetchProjetoPorId(id: string){
    const data = await prisma.projeto.findUnique({
        where:{
            id: id
        }
    })

    return data;
}

export async function fetchPostsIniciaisPorProjeto(id: string) {
    const data : PostComProjeto[] = await prisma.post.findMany({
        where:{
            projetoId:id
        },
        include:{
            projeto:{
                select:{
                    nome: true,
                    foto: true
                }
            }
        },
        take: 3,
        orderBy:{
            postadoEm:"desc"
        }
    })

    return data
}

export async function fetchPostsporProjeto(idProjeto: string, idAtual: string) {
    const data : PostComProjeto[] = await prisma.post.findMany({
        where:{
            projetoId: idProjeto
        },
        include:{
            projeto:{
                select:{
                    nome: true,
                    foto: true
                }
            }
        },
        take: 5,
        skip: 1,
        cursor:{
            id: idAtual
        },
        orderBy:{
            postadoEm:"desc"
        }
    })

    return data;
}

export async function fetchImagensIniciaisPorProjeto(idProjeto : string) {
    const data : ImagemMedia[] = await prisma.post.findMany({
        take: 5,
        where:{
            imagens:{
                not: null
            },
            projetoId: idProjeto
        },
        select:{
            imagens: true,
            id: true
        },
        orderBy:{
            postadoEm: "desc"
        }
    })

    return data;
}

export async function fetchImagensPorProjeto(idProjeto : string, idAtual : string) {
    const data : ImagemMedia[] = await prisma.post.findMany({
        take: 5,
        skip: 1,
        where:{
            imagens:{
                not: null
            },
            projetoId: idProjeto
        },
        select:{
            imagens: true,
            id: true
        },
        orderBy:{
            postadoEm: "desc"
        },
        cursor:{
            id: idAtual
        }
    })

    return data;
}

export async function fetchEventByID(eventId : string) {
    const data = await prisma.evento.findUnique({
        where:{
            id: eventId
        },
        include:{
            projeto:{
                select:{
                    nome: true,
                    foto: true
                }
            }
        }
    })

    return data;
}

export async function fetchInitialEvents(query: string) {
    const data : EventoComProjeto[] = await prisma.evento.findMany({
        take: 15,
        where:{
            OR: [
                {
                    nome:{
                        contains: query,
                        mode: "insensitive"
                    }
                },
                {
                    projeto:{
                        nome:{
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                }
            ]
        },
        orderBy:{
            data: "desc"
        },
        include:{
            projeto:{
                select:{
                    foto: true,
                    nome:true
                }
            }
        }
    })

    return data;
}

export async function fetchEvents(lastID: string, query: string) {
    const data : EventoComProjeto[] = await prisma.evento.findMany({
        take: 15,
        skip: 1,
        where:{
            OR: [
                {
                    nome:{
                        contains: query,
                        mode: "insensitive"
                    }
                },
                {
                    projeto:{
                        nome:{
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                }
            ]
        },
        orderBy:{
            data: "desc"
        },
        include:{
            projeto:{
                select:{
                    foto: true,
                    nome:true
                }
            }
        },
        cursor:{
            id: lastID
        }
    })

    return data;
}

export async function fetchEventsforWidget() {
    const data : EventoComProjeto[] = await prisma.evento.findMany({
        take: 5,
        include:{
            projeto:{
                select:{
                    nome: true,
                    foto: true
                }
            }
        },
        orderBy:{
            data: "asc"
        }
    })

    return data
}

export async function FetchInitialSelectionProcesses(query: string) {
    const data : ProcessWithProject[] = await prisma.processoSeletivo.findMany({
        take:10,
        where:{
            OR: [
                {
                    titulo:{
                        contains: query,
                        mode: "insensitive"
                    }
                },
                {
                    projeto:{
                        nome:{
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                }
            ]
        },
        orderBy: {
            dataLimite: "asc"
        },
        include:{
            projeto:{
                select:{
                    nome: true,
                    foto: true
                }
            }
        }
    })

    return data;
}

export async function FetchSelectionProcesses(query: string, lastId: string) {
    const data : ProcessWithProject[] = await prisma.processoSeletivo.findMany({
        take:10,
        skip: 1,
        where:{
            OR: [
                {
                    titulo:{
                        contains: query,
                        mode: "insensitive"
                    }
                },
                {
                    projeto:{
                        nome:{
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                }
            ]
        },
        orderBy: {
            dataLimite: "asc"
        },
        include:{
            projeto:{
                select:{
                    nome: true,
                    foto: true
                }
            }
        },
        cursor:{
            id: lastId
        }
    })

    return data;
}

export async function fetchSelectionProcessesforWidget() {
    const data : ProcessWithProject[] = await prisma.processoSeletivo.findMany({
        take: 5,
        include:{
            projeto:{
                select:{
                    nome: true,
                    foto: true
                }
            }
        },
        orderBy:{
            dataLimite: "asc"
        }
    })
    
    return data
}