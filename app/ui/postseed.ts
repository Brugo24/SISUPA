import { prisma } from "../lib/prisma";


const postsDeTeste = [
  {
    titulo: "Lançamento da v1.0 do SISUPA",
    corpo: "É com muito orgulho que anunciamos o lançamento da primeira versão estável da nossa plataforma. Foram meses de dedicação da equipe.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    titulo: "Integração com PostgreSQL e Prisma concluída",
    corpo: "A migração do nosso banco de dados para PostgreSQL usando Prisma ORM foi um sucesso. A performance das queries melhorou em 40%.",
    imagens: "https://via.placeholder.com/600x400",
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    titulo: "Implementação do Scroll Infinito",
    corpo: "Adeus, paginação antiga! Agora a plataforma conta com scroll infinito utilizando paginação baseada em cursor para uma experiência mais fluida.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    titulo: "Melhorias nas métricas de Core Web Vitals",
    corpo: "Aplicamos técnicas de lazy loading e otimização de imagens com next/image. Nosso LCP agora está abaixo de 2.5 segundos.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    titulo: "Reunião de Planejamento da Sprint 4",
    corpo: "Definimos os escopos da próxima sprint. O foco principal será a construção do painel administrativo e autenticação de usuários.",
    imagens: "https://via.placeholder.com/600x400",
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 5)),
  },
  {
    titulo: "Design System Atualizado",
    corpo: "Nossa equipe de design finalizou a nova paleta de cores e tipografia no Tailwind CSS. O visual está muito mais moderno e acessível.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 6)),
  },
  {
    titulo: "Correção de Bug Crítico no Cadastro",
    corpo: "Identificamos e corrigimos um bug que impedia o cadastro de novos usuários com e-mails contendo caracteres especiais. Patch já em produção.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 7)),
  },
  {
    titulo: "Adoção do Next.js App Router",
    corpo: "Migramos completamente nossa arquitetura para o App Router do Next.js 14, aproveitando os Server Components para maior segurança e velocidade.",
    imagens: "https://via.placeholder.com/600x400",
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 8)),
  },
  {
    titulo: "Nova funcionalidade: Relações Many-to-Many",
    corpo: "Agora os usuários podem estar vinculados a múltiplos projetos simultaneamente, graças à nova estrutura de tabelas pivot no Prisma.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    titulo: "Testes automatizados com Jest",
    corpo: "Alcançamos 80% de cobertura de código nos testes unitários das nossas regras de negócio e Server Actions.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 10)),
  },
  {
    titulo: "Refatoração do componente de Post",
    corpo: "O componente foi refatorado para receber propriedades agrupadas, resolvendo problemas de tipagem com o TypeScript e melhorando a manutenção.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 11)),
  },
  {
    titulo: "Parceria com a nova API de pagamentos",
    corpo: "Iniciamos os testes de integração com o novo gateway de pagamentos para a gestão financeira dos projetos internos.",
    imagens: "https://via.placeholder.com/600x400",
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 12)),
  },
  {
    titulo: "Dica técnica: Intersection Observer",
    corpo: "Você sabia que usar o Intersection Observer é muito mais performático do que ouvir o evento de scroll da janela? Aplicamos isso hoje no sistema.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 13)),
  },
  {
    titulo: "Feedback dos usuários Beta",
    corpo: "Compilamos os feedbacks dos nossos primeiros 50 usuários. A resposta tem sido incrivelmente positiva, especialmente sobre a velocidade de carregamento.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 14)),
  },
  {
    titulo: "Início do Projeto SISUPA",
    corpo: "Hoje damos o pontapé inicial neste projeto incrível. O repositório foi criado e o ambiente de desenvolvimento configurado.",
    imagens: "https://via.placeholder.com/600x400",
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 15)),
  }
];

// Função principal que vai rodar o código
async function main() {
  console.log('⏳ Iniciando a inserção dos posts no banco de dados...');
  
  const result = await prisma.post.createMany({
    data: postsDeTeste,
  });

  console.log(`✅ Sucesso! ${result.count} posts foram inseridos.`);
}

// Executa a função e gerencia a conexão do banco
main()
  .catch((e) => {
    console.error('❌ Erro ao inserir posts:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });