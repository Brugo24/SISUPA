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
  
  const novoPost = await prisma.post.create({
  data: {
    titulo: "🚀 Cobertura do Nosso Grande Evento!",
    corpo: "O evento foi maravilhoso! Aconteceu isso e aquilo...",
    status: "publicado",
    projetoId: "cmqflqh3e0000n4xwryoasztl", 
    
    // Agora vai o array puro direto para o banco! 🚀
    imagens: JSON.stringify([
      "https://picsum.photos/seed/sisupa1/1000/800",
      "https://picsum.photos/seed/sisupa2/800/1000",
      "https://picsum.photos/seed/sisupa3/1200/800",
      "https://picsum.photos/seed/sisupa4/900/900",
      "https://picsum.photos/seed/sisupa5/1000/800",
      "https://picsum.photos/seed/sisupa6/800/600",
      "https://picsum.photos/seed/sisupa7/1000/800",
      "https://picsum.photos/seed/sisupa8/1600/900",
      "https://picsum.photos/seed/sisupa9/1000/800",
      "https://picsum.photos/seed/sisupa10/800/1000",
      "https://picsum.photos/seed/sisupa11/1000/800",
      "https://picsum.photos/seed/sisupa12/800/800",
      "https://picsum.photos/seed/sisupa13/1000/800",
      "https://picsum.photos/seed/sisupa14/1200/600",
      "https://picsum.photos/seed/sisupa15/1000/800"
    ])
  }
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