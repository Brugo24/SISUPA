// ==========================================
// 1. DEFINIÇÃO DOS TIPOS (INTERFACES)
// ==========================================

export interface Usuario {
  id: number;
  RA: number;
  nome: string;
}

export interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  banner: string;
  contato: string;
}

export interface Membro {
  idUser: number;
  idProj: number;
  cargo: string;
  admissao: Date; // Usando Date do JS para representar o tipo 'date' do BD
}

export interface Post {
  id: number;
  titulo: string;
  corpo: string;
  imagens: string;
  projeto: number; // Referência ao id do Projeto
  status: 'rascunho' | 'publicado'; // Exemplo de união de strings para o status
  postado_em: Date; // Usando Date para o 'timestamp'
}

export interface ProcessoSeletivo {
  id: number;
  projeto: number; // Referência ao id do Projeto
  descricao: string;
  inscricao: string;
  data_limite: Date;
}

export interface Evento {
  id: number;
  nome: string;
  descricao: string;
  local: string;
  data: Date;
  horario: string; // Mantido como string para representar o formato "HH:mm:ss"
  projeto: number; // Referência ao id do Projeto
}

// ==========================================
// 2. DADOS INDIVIDUAIS PARA POPULAR (MOCK DATA)
// ==========================================

export const usuariosMock: Usuario[] = [
  {
    id: 1,
    RA: 2201452,
    nome: "Carlos Silva"
  },
  {
    id: 2,
    RA: 2201987,
    nome: "Ana Beatriz Costa"
  }
];

export const projetosMock: Projeto[] = [
  {
    id: 10,
    nome: "SISUPA",
    descricao: "Sistema Unificado de Apoio Acadêmico",
    foto: "avatar_sisupa.png",
    banner: "banner_sisupa.png",
    contato: "sisupa@faculdade.edu"
  },
  {
    id: 20,
    nome: "EcoTech",
    descricao: "Projeto focado em sustentabilidade e tecnologia",
    foto: "eco_logo.png",
    banner: "eco_banner.png",
    contato: "contato@ecotech.com"
  }
];

export const membrosMock: Membro[] = [
  {
    idUser: 1,
    idProj: 10,
    cargo: "Desenvolvedor Fullstack",
    admissao: new Date("2025-03-10")
  },
  {
    idUser: 2,
    idProj: 10,
    cargo: "Gerente de Projeto",
    admissao: new Date("2025-02-15")
  }
];

export const postsMock: Post[] = [
  {
    id: 101,
    titulo: "Lançamento da Versão Alfa",
    corpo: "A primeira versão do SISUPA está oficialmente online para testes!",
    imagens: "print_tela_inicial.png",
    projeto: 10,
    status: "publicado",
    postado_em: new Date("2026-06-01T10:00:00")
  },
  {
    id: 102,
    titulo: "Reunião de Alinhamento",
    corpo: "Discutimos hoje as novas diretrizes para o módulo de eventos.",
    imagens: "foto_reuniao.png",
    projeto: 10,
    status: "rascunho",
    postado_em: new Date("2026-06-05T16:30:00")
  }
];

export const processosSeletivosMock: ProcessoSeletivo[] = [
  {
    id: 50,
    projeto: 10,
    descricao: "Estamos recrutando novos desenvolvedores Next.js para o SISUPA.",
    inscricao: "https://forms.gle/exemplo1",
    data_limite: new Date("2026-06-20")
  },
  {
    id: 51,
    projeto: 20,
    descricao: "Vagas para pesquisadores na área de energia solar.",
    inscricao: "https://forms.gle/exemplo2",
    data_limite: new Date("2026-07-05")
  }
];

export const eventosMock: Evento[] = [
  {
    id: 301,
    nome: "Hackathon Interno SISUPA",
    descricao: "Maratona de programação para corrigir bugs da plataforma.",
    local: "Laboratório 4 de Informática",
    data: new Date("2026-06-15"),
    horario: "09:00:00",
    projeto: 10
  },
  {
    id: 302,
    nome: "Workshop EcoTech e Comunidade",
    descricao: "Apresentação dos resultados de reciclagem tecnológica.",
    local: "Auditório Principal",
    data: new Date("2026-06-18"),
    horario: "14:00:00",
    projeto: 20
  }
];