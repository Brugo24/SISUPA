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
  
  const novosprojetos = await prisma.projeto.createMany({
    data: [
      
  {
    nome: "EcoMonitor",
    descricao: "Plataforma IoT para monitoramento de qualidade do ar em ambientes acadêmicos.",
    foto: "https://ui-avatars.com/api/?name=EcoMonitor&background=10b981&color=fff",
    banner: "https://placehold.co/1200x400/10b981/ffffff?text=EcoMonitor+Banner",
    contato: "contato@ecomonitor.ufpa.br"
  },
  {
    nome: "TechMed",
    descricao: "Sistema de triagem inteligente para unidades básicas de saúde.",
    foto: null,
    banner: null,
    contato: "techmed_suporte@gmail.com"
  },
  {
    nome: "AgroSmart",
    descricao: "Aplicativo para gestão de pequenas lavouras utilizando IA para previsão de colheita.",
    foto: "https://ui-avatars.com/api/?name=AgroSmart&background=f59e0b&color=fff",
    banner: null,
    contato: null
  },
  {
    nome: "EduLibras",
    descricao: "Tradutor em tempo real de português para a Língua Brasileira de Sinais usando visão computacional.",
    foto: null,
    banner: "https://placehold.co/1200x400/3b82f6/ffffff?text=EduLibras",
    contato: "edulibras@projeto.edu.br"
  },
  {
    nome: "MobAcess",
    descricao: "Mapeamento colaborativo de acessibilidade em vias públicas urbanas.",
    foto: "https://ui-avatars.com/api/?name=MobAcess&background=ef4444&color=fff",
    banner: null,
    contato: null
  },
  {
    nome: "FinKids",
    descricao: "Gamificação para ensino de educação financeira para crianças do ensino fundamental.",
    foto: null,
    banner: null,
    contato: "hello@finkids.app"
  },
  {
    nome: "SisGestão Escolar",
    descricao: "ERP de código aberto focado em escolas públicas estaduais.",
    foto: "https://ui-avatars.com/api/?name=SisGestão&background=6366f1&color=fff",
    banner: "https://placehold.co/1200x400/6366f1/ffffff?text=Gestão+Escolar",
    contato: "admin@sisgestao.com"
  },
  {
    nome: "AutoDrive TCC",
    descricao: "Protótipo de veículo autônomo em escala reduzida usando redes neurais.",
    foto: null,
    banner: null,
    contato: null
  },
  {
    nome: "CriptoVote",
    descricao: "Sistema de votação acadêmica descentralizada baseada em tecnologia Blockchain.",
    foto: "https://ui-avatars.com/api/?name=CriptoVote&background=8b5cf6&color=fff",
    banner: null,
    contato: "votos@criptovote.br"
  },
  {
    nome: "Recicla+",
    descricao: "App que conecta catadores de materiais recicláveis a condomínios residenciais.",
    foto: null,
    banner: "https://placehold.co/1200x400/22c55e/ffffff?text=Recicla+",
    contato: null
  },
  {
    nome: "NutriIA",
    descricao: "Geração de cardápios personalizados baseados em análise genética e IA.",
    foto: "https://ui-avatars.com/api/?name=NutriIA&background=ec4899&color=fff",
    banner: null,
    contato: "contato@nutriia.com.br"
  },
  {
    nome: "SmartCampus",
    descricao: "Aplicativo de navegação interna e reserva de laboratórios para universidades.",
    foto: null,
    banner: null,
    contato: null
  },
  {
    nome: "DevOps Builder",
    descricao: "Ferramenta para automatização de pipelines CI/CD para estudantes de engenharia de software.",
    foto: "https://ui-avatars.com/api/?name=DevOps+Builder&background=1e293b&color=fff",
    banner: "https://placehold.co/1200x400/1e293b/ffffff?text=DevOps+Builder",
    contato: "devops@builder.io"
  },
  {
    nome: "PetFinder",
    descricao: "Rede social para adoção e resgate de animais em situação de rua.",
    foto: null,
    banner: null,
    contato: "sos@petfinder.org"
  },
  {
    nome: "GeoTracker",
    descricao: "Rastreamento e análise de frotas de transporte público em tempo real.",
    foto: "https://ui-avatars.com/api/?name=GeoTracker&background=06b6d4&color=fff",
    banner: null,
    contato: null
  },
  {
    nome: "FalaDev",
    descricao: "Fórum gamificado para tirar dúvidas de programação entre calouros e veteranos.",
    foto: null,
    banner: null,
    contato: "faladev@universidade.br"
  },
  {
    nome: "BioPrint",
    descricao: "Pesquisa sobre impressão 3D de tecidos biológicos para testes de cosméticos.",
    foto: "https://ui-avatars.com/api/?name=BioPrint&background=be123c&color=fff",
    banner: "https://placehold.co/1200x400/be123c/ffffff?text=BioPrint+Project",
    contato: "lab@bioprint.com"
  },
  {
    nome: "OdontoDigital",
    descricao: "Prontuário eletrônico unificado para clínicas odontológicas universitárias.",
    foto: null,
    banner: null,
    contato: null
  },
  {
    nome: "DroneTech",
    descricao: "Uso de drones para mapeamento topográfico de áreas de risco geológico.",
    foto: "https://ui-avatars.com/api/?name=DroneTech&background=475569&color=fff",
    banner: null,
    contato: "drones@tech.br"
  },
  {
    nome: "MentalCare",
    descricao: "Chatbot de apoio psicológico primário para estudantes em período de provas.",
    foto: null,
    banner: "https://placehold.co/1200x400/60a5fa/ffffff?text=MentalCare",
    contato: "apoio@mentalcare.org"
  },
  {
    nome: "ArteViva",
    descricao: "Galeria virtual em Realidade Aumentada (AR) para artistas independentes.",
    foto: "https://ui-avatars.com/api/?name=ArteViva&background=f43f5e&color=fff",
    banner: null,
    contato: null
  },
  {
    nome: "TourVirtual UF",
    descricao: "Mapeamento em 360º de todo o campus universitário para novos alunos.",
    foto: null,
    banner: null,
    contato: "tour@uf.edu.br"
  },
  {
    nome: "SISUPA Core",
    descricao: "Módulo principal de arquitetura e documentação do sistema SISUPA.",
    foto: "https://ui-avatars.com/api/?name=SISUPA&background=0D8ABC&color=fff",
    banner: "https://placehold.co/1200x400/0D8ABC/ffffff?text=SISUPA+Core+System",
    contato: "admin@sisupa.com.br"
  }

    ]
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