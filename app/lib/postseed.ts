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

  const descricao = `# Processo Seletivo 2026.2 – Núcleo de Desenvolvimento Full-Stack & UI/UX

Estão abertas as inscrições para o **Processo Seletivo 2026.2** da nossa equipe de desenvolvimento! Procuramos estudantes motivados a colocar em prática conhecimentos de ecossistemas modernos de programação web e design de produto.

![Equipe trabalhando em projeto web](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80)

---

## 🚀 Sobre o Projeto

O nosso laboratório atua diretamente na criação de soluções tecnológicas para a comunidade acadêmica. Os selecionados farão parte da squad responsável pela arquitetura, manutenção e evolução de plataformas web voltadas para eventos e gestão de projetos.

### Vagas Disponíveis

* **Desenvolvedor(a) Front-End (Next.js / Tailwind CSS):** Foco em construção de interfaces responsivas, acessibilidade e integração com componentes interativos.
* **Desenvolvedor(a) Back-End (Node.js / Prisma ORM):** Atuação no desenvolvimento de APIs Serverless, consultas no PostgreSQL e modelagem de banco de dados.
* **Designer UI/UX:** Responsável pelo protótipo no Figma, testes de usabilidade e manutenção do Design System.

---

## 🎯 Requisitos Necessários

1. Estar regularmente matriculado em cursos da área de Exatas, Tecnologia ou Design.
2. Disponibilidade de **8 a 12 horas semanais** para reuniões e entregas de sprints.
3. Vontade de aprender e trabalhar em equipe utilizando metodologias ágeis (Scrum/Kanban).

![Reunião de alinhamento de sprint](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80)

---

## 📅 Cronograma do Processo Seletivo

| Etapa | Data / Período | Descrição |
| :--- | :--- | :--- |
| **Inscrições** | Até 30/09/2026 | Preenchimento do formulário online |
| **Triagem Curricular** | 01/10 a 03/10 | Análise de perfil e portfólio/GitHub |
| **Desafio Prático** | 04/10 a 08/10 | Pequena tarefa prática conforme a trilha |
| **Entrevistas** | 10/10 a 14/10 | Conversa individual com a liderança |
| **Resultado Final** | 16/10/2026 | Divulgação dos aprovados |

---

## 🎁 Benefícios para o Aluno

* **Horas Complementares:** Emissão de certificado oficial de extensão universitária.
* **Portfólio Real:** Código e designs em produção utilizados por usuários reais.
* **Networking & Mentoria:** Acompanhamento direto com professores orientadores e veteranos da área.

> "A experiência prática em projetos durante a graduação é o grande diferencial para a inserção no mercado de trabalho."

---

## 📌 Como se Inscrever

Para garantir sua participação, preencha o formulário oficial até as **23:59 do dia 30 de Setembro de 2026**.

[👉 Clique aqui para acessar o Formulário de Inscrição](https://forms.gle/sisupa-dev-2026)`
  
  const processosSeletivos = [
  {
    titulo: "Seleção de Desenvolvedores Full-Stack 2026.2",
    descricao: "Vagas para alunos de TI interessados em trabalhar com Next.js, Prisma e PostgreSQL na modernização de sistemas acadêmicos.",
    inscricao: "https://forms.gle/sisupa-dev-2026",
    dataLimite: new Date("2026-09-30T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    titulo: "Processo Seletivo - Equipe de Design UI/UX & Identidade",
    descricao: descricao,
    inscricao: "https://forms.gle/sisupa-design-2026",
    dataLimite: new Date("2026-09-25T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    titulo: "Vagas para Pesquisa em Inteligência Artificial Aplicada",
    descricao: "Seleção de bolsistas e voluntários para desenvolvimento de modelos de aprendizado de máquina aplicados à análise de dados acadêmicos.",
    inscricao: "https://forms.gle/sisupa-ia-2026",
    dataLimite: new Date("2026-10-05T23:59:59Z"),
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
  },
  {
    titulo: "Chamada de Monitores e Suporte Técnico",
    descricao: "Oportunidade para alunos atuarem no atendimento aos usuários da plataforma, elaboração de tutoriais e testes de qualidade (QA).",
    inscricao: "https://forms.gle/sisupa-qa-2026",
    dataLimite: new Date("2026-09-20T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    titulo: "Seleção para a Equipe de Gestão de Conteúdo e Mídias",
    descricao: "Procuramos alunos de Comunicação e Jornalismo para produção de artigos, documentação e divulgação dos eventos acadêmicos.",
    inscricao: "https://forms.gle/sisupa-midias-2026",
    dataLimite: new Date("2026-10-10T23:59:59Z"),
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
  },
  {
    titulo: "Estágio Interno: Infraestrutura DevOps e Cloud Security",
    descricao: "Vaga para atuar no monitoramento da Vercel, pipelines CI/CD no GitHub Actions e segurança de bancos de dados PostgreSQL.",
    inscricao: "https://forms.gle/sisupa-devops-2026",
    dataLimite: new Date("2026-10-01T23:59:59Z"),
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
  },
  {
    titulo: "Processo Seletivo de Treinees - Empresa Júnior de Computação",
    descricao: "Admissão de novos membros para projetos de consultoria web, aplicativo móvel e gestão agil utilizando Scrum.",
    inscricao: "https://forms.gle/sisupa-ej-2026",
    dataLimite: new Date("2026-09-18T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    titulo: "Recrutamento para o Grupo de Robótica e Sistemas Embarcados",
    descricao: "Seleção de alunos de Engenharia e Ciência da Computação para desenvolvimento de firmware C++ e integração IoT.",
    inscricao: "https://forms.gle/sisupa-robotica-2026",
    dataLimite: new Date("2026-10-15T23:59:59Z"),
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
  },
  {
    titulo: "Seleção de Pesquisadores em Ciência de Dados",
    descricao: "Edital aberto para mapeamento de tendências universitárias com Python, Pandas e dashboards iterativos.",
    inscricao: "https://forms.gle/sisupa-datascience-2026",
    dataLimite: new Date("2026-09-28T23:59:59Z"),
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
  },
  {
    titulo: "Vagas para Desenvolvedores Front-End Mobile (React Native)",
    descricao: "Procuramos alunos com experiência prévia ou interesse em desenvolvimento mobile para criação do aplicativo do projeto.",
    inscricao: "https://forms.gle/sisupa-mobile-2026",
    dataLimite: new Date("2026-10-12T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    titulo: "Chamada de Projetos de Extensão: Inclusão Digital",
    descricao: "Vagas para ministrar oficinas de informática básica e programação introdutória para a comunidade externa.",
    inscricao: "https://forms.gle/sisupa-extensao-2026",
    dataLimite: new Date("2026-09-22T23:59:59Z"),
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
  },
  {
    titulo: "Seleção para o Time de Engenharia de Dados",
    descricao: "Atuação na modelagem de ETL, otimização de queries Prisma/SQL e integração de APIs REST externas.",
    inscricao: "https://forms.gle/sisupa-dataeng-2026",
    dataLimite: new Date("2026-10-08T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    titulo: "Processo Seletivo de Bolsistas de Iniciação Científica",
    descricao: "Bolsas de pesquisa para estudo de metodologias ágeis no desenvolvimento de plataformas de gestão acadêmica.",
    inscricao: "https://forms.gle/sisupa-pibic-2026",
    dataLimite: new Date("2026-09-29T23:59:59Z"),
    projetoId: "cmqflqh6x0001n4xwigrq3h8b",
  },
  {
    titulo: "Recrutamento de Product Owner e Scrum Masters Acadêmicos",
    descricao: "Oportunidade de liderança de squads de desenvolvimento, acompanhamento de sprints e alinhamento de requisitos.",
    inscricao: "https://forms.gle/sisupa-po-2026",
    dataLimite: new Date("2026-10-03T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
  {
    titulo: "Seleção de Editores e Revisores de Documentação Técnica",
    descricao: "Vagas para organização dos manuais de uso da plataforma, criação do guia ABNT e padronização do repositório.",
    inscricao: "https://forms.gle/sisupa-docs-2026",
    dataLimite: new Date("2026-09-27T23:59:59Z"),
    projetoId: "cmqflqh3e0000n4xwryoasztl",
  },
];

  const abababa = await prisma.processoSeletivo.createMany({
    data: processosSeletivos
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