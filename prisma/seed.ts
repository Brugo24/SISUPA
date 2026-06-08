import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando o processo de seed...')

  // 1. Limpar o banco (Opcional, mas evita duplicar dados se rodar o seed mais de uma vez)
  // A ordem aqui importa por causa das chaves estrangeiras!
  await prisma.evento.deleteMany()
  await prisma.processoSeletivo.deleteMany()
  await prisma.post.deleteMany()
  await prisma.membro.deleteMany()
  await prisma.projeto.deleteMany()
  await prisma.usuario.deleteMany()

  // 2. Popular Usuários
  const u1 = await prisma.usuario.create({
    data: { id: 1, RA: 2201452, nome: "Carlos Silva" }
  })
  const u2 = await prisma.usuario.create({
    data: { id: 2, RA: 2201987, nome: "Ana Beatriz Costa" }
  })

  // 3. Popular Projetos
  await prisma.projeto.create({
    data: {
      id: 10,
      nome: "SISUPA",
      descricao: "Sistema Unificado de Apoio Acadêmico",
      foto: "avatar_sisupa.png",
      banner: "banner_sisupa.png",
      contato: "sisupa@faculdade.edu"
    }
  })
  await prisma.projeto.create({
    data: {
      id: 20,
      nome: "EcoTech",
      descricao: "Projeto focado em sustentabilidade e tecnologia",
      foto: "eco_logo.png",
      banner: "eco_banner.png",
      contato: "contato@ecotech.com"
    }
  })

  // 4. Popular Membros
  await prisma.membro.create({
    data: { idUser: 1, idProj: 10, cargo: "Desenvolvedor Fullstack", admissao: new Date("2025-03-10") }
  })
  await prisma.membro.create({
    data: { idUser: 2, idProj: 10, cargo: "Gerente de Projeto", admissao: new Date("2025-02-15") }
  })

  // 5. Popular Posts
  await prisma.post.create({
    data: {
      id: 101,
      titulo: "Lançamento da Versão Alfa",
      corpo: "A primeira versão do SISUPA está oficialmente online para testes!",
      imagens: "print_tela_inicial.png",
      projeto: 10,
      status: "publicado",
      postado_em: new Date("2026-06-01T10:00:00")
    }
  })
  await prisma.post.create({
    data: {
      id: 102,
      titulo: "Reunião de Alinhamento",
      corpo: "Discutimos hoje as novas diretrizes para o módulo de eventos.",
      imagens: "foto_reuniao.png",
      projeto: 10,
      status: "rascunho",
      postado_em: new Date("2026-06-05T16:30:00")
    }
  })

  // 6. Popular Processos Seletivos
  await prisma.processoSeletivo.create({
    data: {
      id: 50,
      projeto: 10,
      descricao: "Estamos recrutando novos desenvolvedores Next.js para o SISUPA.",
      inscricao: "https://forms.gle/exemplo1",
      data_limite: new Date("2026-06-20")
    }
  })

  // 7. Popular Eventos
  await prisma.evento.create({
    data: {
      id: 301,
      nome: "Hackathon Interno SISUPA",
      descricao: "Maratona de programação para corrigir bugs da plataforma.",
      local: "Laboratório 4 de Informática",
      data: new Date("2026-06-15"),
      horario: "09:00:00",
      projeto: 10
    }
  })

  console.log('✅ Banco de dados populado com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })