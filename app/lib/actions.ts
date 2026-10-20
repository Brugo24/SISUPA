'use server'

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

export async function authenticate(prevState : string | undefined, formData : FormData) {
    try{
        await signIn('credentials', formData);
    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin':
                    return 'Invalid Credentials';
                default:
                    return 'Something went wrong';
            }
        }
        throw error;
    }   
}

export async function editarPostAction(formData: FormData) {
  const id = formData.get("id") as string;
  const titulo = formData.get("titulo") as string;
  const corpo = formData.get("corpo") as string;
  const status = formData.get("status") as string;
  const imagens = formData.get("imagens") as string | null;

  await prisma.post.update({
    where: { id },
    data: {
      titulo,
      corpo,
      status,
      ...(imagens ? { imagens } : {}),
    },
  });

  revalidatePath("/dashboard");
}

export async function criarPostAction(formData: FormData) {
const titulo = formData.get("titulo") as string;
  const corpo = formData.get("corpo") as string;
  const projetoId = formData.get("projetoId") as string; //ALTERAR: FAZER BUSCAR POR MEMBRO
  const status = (formData.get("status") as string) || "PUBLICADO";
  const imagens = formData.get("imagens") as string | null;

  if (!titulo || !corpo || !projetoId) {
    throw new Error("Título, corpo e projetoId são campos obrigatórios.");
  }

  await prisma.post.create({
    data: {
      titulo,
      corpo,
      projetoId,
      status,
      ...(imagens ? { imagens } : {}),
    },
  });

  revalidatePath("/dashboard");
}

// 2. Editar Processo Seletivo (Campos: titulo, descricao, inscricao, dataLimite)
export async function editarProcessoSeletivoAction(formData: FormData) {
  const id = formData.get("id") as string;
  const titulo = formData.get("titulo") as string;
  const descricao = formData.get("descricao") as string;
  const inscricao = formData.get("inscricao") as string;
  const dataLimiteRaw = formData.get("dataLimite") as string;

  await prisma.processoSeletivo.update({
    where: { id },
    data: {
      titulo,
      descricao,
      inscricao,
      dataLimite: new Date(dataLimiteRaw),
    },
  });

  revalidatePath("/dashboard");
}

export async function criarProcessoSeletivoAction(formData: FormData) {
  const titulo = formData.get("titulo") as string;
  const descricao = formData.get("descricao") as string;
  const inscricao = formData.get("inscricao") as string;
  const dataLimiteRaw = formData.get("dataLimite") as string; // Formato: 'YYYY-MM-DD'
  const projetoId = formData.get("projetoId") as string;

  // Validação dos campos obrigatórios
  if (!titulo || !descricao || !inscricao || !dataLimiteRaw || !projetoId) {
    throw new Error("Preencha todos os campos obrigatórios do processo seletivo.");
  }

  await prisma.processoSeletivo.create({
    data: {
      titulo,
      descricao,
      inscricao,
      dataLimite: new Date(dataLimiteRaw),
      projetoId,
    },
  });

  revalidatePath("/dashboard");
}

// 3. Editar Evento (Campos: nome, descricao, local, data, horario, banner)
export async function editarEventoAction(formData: FormData) {
  const id = formData.get("id") as string;
  const nome = formData.get("nome") as string;
  const descricao = formData.get("descricao") as string;
  const local = formData.get("local") as string;
  const dataRaw = formData.get("data") as string; // 'YYYY-MM-DD'
  const horarioRaw = formData.get("horario") as string; // 'HH:mm'
  const banner = formData.get("banner") as string | null;

  // Converte data e hora para objetos Date válidos do PostgreSQL
  const dataObj = new Date(dataRaw);
  const horarioObj = new Date(`${dataRaw}T${horarioRaw}:00`);

  await prisma.evento.update({
    where: { id },
    data: {
      nome,
      descricao,
      local,
      data: dataObj,
      horario: horarioObj,
      ...(banner ? { banner } : {}),
    },
  });

  revalidatePath("/dashboard");
}

export async function criarEventoAction(formData: FormData) {
  const nome = formData.get("nome") as string;
  const descricao = formData.get("descricao") as string;
  const local = formData.get("local") as string;
  const dataRaw = formData.get("data") as string; // Formato: 'YYYY-MM-DD'
  const horarioRaw = formData.get("horario") as string; // Formato: 'HH:mm'
  const banner = formData.get("banner") as string | null;
  const projetoId = formData.get("projetoId") as string;

  // Validação dos campos obrigatórios
  if (!nome || !descricao || !local || !dataRaw || !horarioRaw || !projetoId) {
    throw new Error("Preencha todos os campos obrigatórios do evento.");
  }

  // Converte as strings do form em objetos Date para o PostgreSQL
  const dataObj = new Date(dataRaw);
  const horarioObj = new Date(`${dataRaw}T${horarioRaw}:00`);

  await prisma.evento.create({
    data: {
      nome,
      descricao,
      local,
      data: dataObj,
      horario: horarioObj,
      projetoId,
      ...(banner ? { banner } : {}),
    },
  });

  revalidatePath("/dashboard");
}