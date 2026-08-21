import { prisma } from "./prisma";

const postsDeTeste = [
  {
    titulo: "Post com 1 Imagem",
    corpo: "Este post possui exatamente uma imagem cadastrada para testar o layout de mídia única.",
    imagens: JSON.stringify(["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop"]),
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    titulo: "Post com 2 Imagens",
    corpo: "Este post foi feito com duas imagens para testar o comportamento do grid lado a lado no feed.",
    imagens: JSON.stringify([
      "https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop"
    ]),
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    titulo: "Post com 3 Imagens",
    corpo: "Testando a renderização de três imagens na galeria de fotos do componente de post.",
    imagens: JSON.stringify([
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop"
    ]),
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    titulo: "Post com 4 Imagens",
    corpo: "Configuração máxima de teste com quatro imagens simultâneas em formato de mosaico completo.",
    imagens: JSON.stringify([
      "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
    ]),
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    titulo: "Implementação do Scroll Infinito concluída",
    corpo: "A paginação baseada em cursor está funcionando perfeitamente nos testes locais com o Intersection Observer.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 5)),
  },
  {
    titulo: "Correção de bugs na autenticação",
    corpo: "Ajustamos os tokens JWT e os cookies de sessão para expirarem corretamente após o período determinado.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 6)),
  },
  {
    titulo: "Configuração do banco de dados relacional",
    corpo: "Tabelas normalizadas e índices criados nas colunas de busca frequente para otimizar o tempo de resposta.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 7)),
  },
  {
    titulo: "Nova feature: Modo Escuro integrado",
    corpo: "Agora o sistema detecta automaticamente a preferência do sistema operacional e aplica as classes dark do Tailwind.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 8)),
  },
  {
    titulo: "Melhorias de acessibilidade no ecossistema",
    corpo: "Adicionados atributos ARIA em todos os modais e botões interativos para melhor leitura por leitores de tela.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    titulo: "Refatoração de Server Actions",
    corpo: "Centralizamos as validações do Zod diretamente dentro das actions para garantir a integridade dos dados no servidor.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 10)),
  },
  {
    titulo: "Testes de carga e estresse de endpoints",
    corpo: "Suportamos uma alta taxa de requisições simultâneas por segundo sem qualquer degradação perceptível de performance.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 11)),
  },
  {
    titulo: "Atualização das dependências do Next.js",
    corpo: "Migrado com sucesso para o patch mais recente, corrigindo avisos apontados pelo gerenciador de pacotes.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 12)),
  },
  {
    titulo: "Documentação da API via Swagger",
    corpo: "Todos os endpoints públicos agora estão devidamente documentados e tipados, facilitando a integração com o time.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 13)),
  },
  {
    titulo: "Otimização do bundle de produção",
    corpo: "Reduzimos o tamanho dos chunks iniciais utilizando dynamic imports em componentes pesados e páginas internas.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 14)),
  },
  {
    titulo: "Migração completa de arquivos estáticos",
    corpo: "Imagens pesadas agora são servidas via CDN externa com compressão automática em formato moderno.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 15)),
  },
  {
    titulo: "Revisão de código da equipe principal",
    corpo: "Aprovados os pull requests pendentes da feature de relatórios financeiros mensais automatizados.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 16)),
  },
  {
    titulo: "Início do desenvolvimento do módulo administrativo",
    corpo: "Definição de escopo, mockups estruturais e criação das primeiras rotas protegidas por middleware de permissão.",
    imagens: null,
    status: "PUBLICADO",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
    postadoEm: new Date(new Date().setDate(new Date().getDate() - 17)),
  },
];

async function main() {
  console.log('🧹 Limpando todos os posts antigos do banco de dados...');
  console.log('✅ Banco limpo!');

  console.log('⏳ Iniciando a inserção dos 17 novos posts de teste...');
  
  const eventosSeed = [
  {
    nome: "DevSummit Bauru 2026",
    descricao: "O maior encontro de tecnologia do interior. Palestras sobre Next.js, Inteligência Artificial e o futuro do ecossistema React.",
    local: "Auditório Principal - Bloco A",
    data: new Date("2026-09-15T00:00:00.000Z"),
    horario: new Date("2026-09-15T09:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Hackathon de Inteligência Artificial",
    descricao: "Maratona de 24 horas de desenvolvimento focada na criação de soluções usando LLMs e agentes autônomos para impacto social.",
    local: "Laboratório de Informática 04",
    data: new Date("2026-09-22T00:00:00.000Z"),
    horario: new Date("2026-09-22T08:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Workshop de Next.js & App Router",
    descricao: "Aprenda na prática a construir aplicações web de alta performance utilizando Server Components, Actions e Prisma ORM.",
    local: "Lab de Redes - Sala 12",
    data: new Date("2026-10-05T00:00:00.000Z"),
    horario: new Date("2026-10-05T14:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Feira de Apresentação de TCCs",
    descricao: "Exposição dos projetos de conclusão de curso das turmas de Ciência da Computação e Sistemas de Informação.",
    local: "Saguão Central do Campus",
    data: new Date("2026-10-18T00:00:00.000Z"),
    horario: new Date("2026-10-18T10:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Bootcamp de UI/UX com Tailwind CSS",
    descricao: "Workshop prático focado em princípios de design de interface, acessibilidade web e estilização rápida com Tailwind CSS.",
    local: "Auditório B - Sala de Multimídia",
    data: new Date("2026-11-03T00:00:00.000Z"),
    horario: new Date("2026-11-03T13:30:00.000Z"),
    banner: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Mesa Redonda: Cibersegurança em APIs",
    descricao: "Especialistas do mercado discutem boas práticas de autenticação, JWT, OAuth2 e mitigação de vulnerabilidades comuns em sistemas web.",
    local: "Miniauditório 01",
    data: new Date("2026-11-12T00:00:00.000Z"),
    horario: new Date("2026-11-12T19:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Palestra: Modelagem de Dados com Prisma",
    descricao: "Como estruturar esquemas de banco de dados eficientes, gerenciar migrações complexas e otimizar queries em projetos Node.js.",
    local: "Sala A-05",
    data: new Date("2026-11-20T00:00:00.000Z"),
    horario: new Date("2026-11-20T10:30:00.000Z"),
    banner: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Encontro do Grupo de Software Livre",
    descricao: "Encontro comunitário para contribuição em projetos open source, troca de experiências sobre Linux e ferramentas livres.",
    local: "Área de Convivência Externa",
    data: new Date("2026-12-01T00:00:00.000Z"),
    horario: new Date("2026-12-01T15:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Workshop: Git & GitHub Avançado",
    descricao: "Aprenda a dominar comandos como rebase, cherry-pick, stash e a gerenciar fluxos de trabalho eficientes em equipe com Gitflow.",
    local: "Laboratório de Informática 02",
    data: new Date("2026-12-10T00:00:00.000Z"),
    horario: new Date("2026-12-10T08:30:00.000Z"),
    banner: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Game Dev Night: Criando Jogos Indie",
    descricao: "Uma noite dedicada à apresentação de jogos desenvolvidos por alunos e palestras sobre a indústria de desenvolvimento de games.",
    local: "Auditório Principal - Bloco A",
    data: new Date("2026-12-15T00:00:00.000Z"),
    horario: new Date("2026-12-15T18:30:00.000Z"),
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Maratona Universitária de Programação",
    descricao: "Competição no formato da SBC/ICPC testando lógica, estruturas de dados e algoritmos avançados em equipes de três pessoas.",
    local: "Laboratórios de Informática 01 e 03",
    data: new Date("2027-01-15T00:00:00.000Z"),
    horario: new Date("2027-01-15T13:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Meetup React & Frontend Moderno",
    descricao: "Networking e palestras curtas (lightning talks) cobrindo Zustand, TanStack Query, Shadcn UI e as últimas novidades do React 19.",
    local: "Espaço de Inovação / Co-working",
    data: new Date("2027-01-28T00:00:00.000Z"),
    horario: new Date("2027-01-28T19:30:00.000Z"),
    banner: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Palestra: Metodologias Ágeis na Prática",
    descricao: "Como Scrum e Kanban funcionam em startups de tecnologia e na gestão diária de projetos de software reais.",
    local: "Sala A-02",
    data: new Date("2027-02-10T00:00:00.000Z"),
    horario: new Date("2027-02-10T10:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Feira de Estágios & Carreiras Tech",
    descricao: "Conecte-se com empresas patrocinadoras, participe de dinâmicas de recrutamento rápido e tire dúvidas sobre os primeiros passos no mercado.",
    local: "Saguão do Bloco C",
    data: new Date("2027-02-22T00:00:00.000Z"),
    horario: new Date("2027-02-22T09:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    nome: "Encerramento e Premiação dos Destaques",
    descricao: "Cerimônia de premiação dos melhores trabalhos acadêmicos do semestre, seguido de confraternização geral.",
    local: "Anfiteatro Externo",
    data: new Date("2027-03-05T00:00:00.000Z"),
    horario: new Date("2027-03-05T17:00:00.000Z"),
    banner: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
];

  const abababa = await prisma.evento.createMany({
    data: eventosSeed
  })

  console.log(`✅ Sucesso total! posts foram inseridos.`);

}

main()
  .catch((e) => {
    console.error('❌ Erro durante o processo de seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });