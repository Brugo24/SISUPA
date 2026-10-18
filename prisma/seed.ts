import { PrismaClient } from "./lib/generated/prisma-client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.PRISMA_DATABASE_URL })
})

async function main() {
  // A limpeza precisa ser na ordem inversa das relações para não quebrar constraints
  await prisma.membro.deleteMany();
  await prisma.post.deleteMany();
  await prisma.processoSeletivo.deleteMany();
  await prisma.evento.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.projeto.deleteMany();

  // ==========================================
  // 1. CRIANDO OS PROJETOS
  // ==========================================
  const projeto1 = await prisma.projeto.create({
    data: {
      nome: 'SISUPA TCC System',
      descricao: 'Sistema de gerenciamento de TCCs e projetos internos.',
      foto: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
      contato: 'sisupa.suporte@unisal.br'
    }
  });

  const projeto2 = await prisma.projeto.create({
    data: {
      nome: 'EcoMinds Aero',
      descricao: 'Projeto de extensão focado no desenvolvimento de drones ecológicos.',
      foto: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e',
      banner: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852',
      contato: 'ecominds@unisal.br'
    }
  });

  

  // ==========================================
  // 3. CRIANDO OS POSTS
  // ==========================================
  await prisma.post.create({
    data: {
      titulo: 'Kickoff do SISUPA 2026!',
      corpo: 'Hoje iniciamos oficialmente o desenvolvimento do nosso backend utilizando Next.js, Prisma e Vercel Postgres.',
      imagens: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
      status: 'publicado',
      projetoId: projeto1.id // Vinculado ao Projeto 1
    }
  });

  await prisma.post.create({
    data: {
      titulo: 'Primeiros testes de voo do EcoDrone v1',
      corpo: 'A equipe de engenharia realizou com sucesso os testes de estabilidade do protótipo no campo de futebol.',
      imagens: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f',
      status: 'rascunho',
      projetoId: projeto2.id // Vinculado ao Projeto 2
    }
  });

  // ==========================================
  // 4. CRIANDO OS MEMBROS (Tabela Pivot)
  // ==========================================
  await prisma.membro.create({
    data: {
      idUser: usuario1.id,
      idProj: projeto1.id,
      cargo: 'Desenvolvedor Fullstack Leader',
      admissao: new Date('2026-02-15')
    }
  });

  await prisma.membro.create({
    data: {
      idUser: usuario2.id,
      idProj: projeto2.id,
      cargo: 'Pesquisadora Chefe de Hardware',
      admissao: new Date('2026-03-01')
    }
  });

  // ==========================================
  // 5. CRIANDO OS PROCESSOS SELETIVOS
  // ==========================================
  await prisma.processoSeletivo.create({
    data: {
      titulo: 'Recrutamento de Devs Next.js',
      descricao: 'Estamos buscando 2 alunos do curso de Engenharia/CC para atuar na evolução da plataforma SISUPA.',
      inscricao: 'https://forms.gle/sisupa2026dev',
      dataLimite: new Date('2026-07-31'),
      projetoId: projeto1.id
    }
  });

  await prisma.processoSeletivo.create({
    data: {
      titulo: 'Vagas para Equipe de Aerodinâmica',
      descricao: 'Seleção de novos integrantes para modelagem 3D e simulações de fluidos de drones.',
      inscricao: 'https://forms.gle/ecominds2026aero',
      dataLimite: new Date('2026-08-15'),
      projetoId: projeto2.id
    }
  });

  // ==========================================
  // 6. CRIANDO OS EVENTOS
  // ==========================================
  await prisma.evento.create({
    data: {
      nome: 'Workshop: Modelagem de Dados com Prisma',
      descricao: 'Apresentação prática da infraestrutura do SISUPA para os novos membros.',
      local: 'Laboratório de Informática 3 / Teams',
      data: new Date('2026-06-25'),
      horario: new Date('2026-06-25T19:30:00Z'),
      projetoId: projeto1.id
    }
  });

  await prisma.evento.create({
    data: {
      nome: 'Simpósio de Drones de Carga',
      descricao: 'Demonstração pública de autonomia de voo e sensores ambientais.',
      local: 'Auditório Principal do Campus',
      data: new Date('2026-09-10'),
      horario: new Date('2026-09-10T14:00:00Z'),
      projetoId: projeto2.id
    }
  });
}

main()
  .catch((e) => {
    console.error('Erro durante a execução do seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });