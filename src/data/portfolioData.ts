import { Project, Service, TechCategory, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: 'Ruan Pinheiro',
  role: 'Desenvolvedor Web',
  email: 'ruanpinheirolima2003@gmail.com',
  phoneFormatted: '+55 28 99940-7496',
  whatsappNumber: '5528999407496',
  whatsappLink: 'https://wa.me/5528999407496?text=Ol%C3%A1%2C%20Ruan!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
  instagram: 'https://instagram.com/_ruanplima',
  instagramHandle: '@_ruanplima',
  location: 'Brasil • Disponível para projetos remotos',
  tagline: 'Transformo ideias em experiências digitais.',
  subheadline: 'Desenvolvimento de sites e aplicações web com foco em design, performance e resultado.',
  available: true,
};

export const SERVICES: Service[] = [
  {
    id: 'sites-institucionais',
    title: 'Sites Institucionais',
    subtitle: 'Presença digital com autoridade e elegância',
    description: 'Desenvolvimento de sites corporativos e institucionais projetados para transmitir credibilidade, destacar o posicionamento da sua marca e encantar seu público.',
    deliverables: [
      'Design responsivo sob medida (Mobile, Tablet, Desktop)',
      'Estrutura semântica otimizada para Google (SEO On-Page)',
      'Performance e carregamento veloz (Core Web Vitals)',
      'Integração direta com WhatsApp e formulários de contato',
      'Arquitetura limpa para fácil manutenção futura'
    ],
    icon: 'Globe',
    estimatedTimeline: '2 a 3 semanas'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    subtitle: 'Páginas estratégicas orientadas a conversão',
    description: 'Páginas desenhadas com foco exclusivo em transformar visitantes em leads e clientes. Perfeitas para campanhas de tráfego pago, lançamentos e validação de produtos.',
    deliverables: [
      'Estrutura visual com gatilhos de decisão e narrativa clara',
      'Tempo de carregamento quase instantâneo (< 1.5s)',
      'Rastreamento configurado (Pixel, Google Analytics/Tag Manager)',
      'Botões de ação (CTAs) estrategicamente posicionados',
      'Testes de responsividade em múltiplos formatos de tela'
    ],
    icon: 'PanelsTopLeft',
    estimatedTimeline: '1 a 2 semanas'
  },
  {
    id: 'aplicacoes-web',
    title: 'Aplicações Web',
    subtitle: 'Sistemas e dashboards interativos sob medida',
    description: 'Interfaces interativas e sistemas web modernos construídos com React, TypeScript e Tailwind CSS para atender às necessidades específicas da sua operação.',
    deliverables: [
      'Componentização escalável com React e TypeScript',
      'Gerenciamento de estado fluido e sem travamentos',
      'Consumo e integração de APIs REST com tratamento de erros',
      'Experiência de uso consistente e intuitiva (UI/UX)',
      'Boas práticas de acessibilidade e segurança'
    ],
    icon: 'Code2',
    estimatedTimeline: '3 a 6 semanas'
  },
  {
    id: 'automacoes',
    title: 'Automações & Integrações',
    subtitle: 'Fluxos inteligentes que poupam tempo operacional',
    description: 'Integração de processos, plataformas e APIs para automatizar rotinas repetitivas, centralizar dados e conectar ferramentas do seu negócio com n8n e Node.js.',
    deliverables: [
      'Criação de fluxos automatizados com n8n',
      'Conexão de Webhooks, CRMs e bancos de dados',
      'Disparos de alertas e notificações automáticas',
      'Redução de esforço manual em tarefas diárias',
      'Documentação clara de todos os fluxos criados'
    ],
    icon: 'Workflow',
    estimatedTimeline: '1 a 3 semanas'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'stone-cler',
    slug: 'stone-cler',
    title: 'Stone Cler',
    category: 'Sites Institucionais',
    shortDescription: 'Website institucional de alto padrão para marca de revestimentos nobres e arquitetura contemporânea com experiência editorial e visual marcante.',
    fullDescription: 'Desenvolvimento do portal institucional da Stone Cler (www.stonecler.com.br), concebido para transmitir exclusividade, requinte e sofisticação em superfícies minerais e rochas naturais. A interface combina fotografia em alta resolução, tipografia contemporânea e transições suaves que valorizam o portfólio de projetos executados.',
    problem: 'A marca necessitava de uma presença digital que espelhasse o requinte físico de seus produtos, com carregamento instantâneo e navegação intuitiva para arquitetos e clientes exigentes.',
    solution: 'Construção de um portal editorial moderno com React e Tailwind CSS, catálogo dinâmico de coleções com visualização de texturas, otimização de imagens em alta resolução e canal direto de atendimento via WhatsApp.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SEO Estruturado'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SEO Estruturado'],
    metrics: 'Lighthouse 99 • Carregamento em 0.8s',
    year: '2026',
    clientType: 'Arquitetura & Revestimentos Nobres',
    featured: true,
    aspectRatio: 'wide',
    demoUrl: 'https://www.stonecler.com.br',
    keyFeatures: [
      'Catálogo interativo com categorização por texturas e acabamentos nobres',
      'Apresentação editorial de projetos executados e aplicações arquitetônicas',
      'Integração direta com consultores de especificação no WhatsApp',
      'Otimização completa de Core Web Vitals sem perda de fidelidade visual'
    ],
    mockupTheme: {
      accentColor: '#00DF5E',
      bgStyle: 'from-[#222222] to-[#141414]',
      tagline: 'Arquitetura & Superfícies Nobres'
    },
    relatedSlugs: ['marcia-menon', 'cardoso-higienizacao', 'drogaria-consolacao']
  },
  {
    id: 'marcia-menon',
    slug: 'marcia-menon',
    title: 'Marcia Menon',
    category: 'Sites Institucionais',
    shortDescription: 'Website institucional e portfólio autoral para consultoria e posicionamento de marca com ritmo visual refinado e tipografia marcante.',
    fullDescription: 'Desenvolvimento do site institucional de Marcia Menon (www.marciamenon.com.br), criado para destacar autoridade, estratégia e refinamento visual. Uma experiência digital com design minimalista, foco em espaço negativo e narrativa envolvente para potenciais clientes.',
    problem: 'Necessidade de um espaço digital que funcionasse como uma vitrine de alto impacto para sua metodologia e projetos, transmitindo elegância e segurança imediata.',
    solution: 'Interface minimalista contemporânea, tipografia com hierarquia precisa, transições fluidas e formulário de contato simplificado integrado ao WhatsApp.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Design Editorial', 'UI/UX'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Design Editorial', 'UI/UX'],
    metrics: 'Carregamento instantâneo • 100% responsivo',
    year: '2026',
    clientType: 'Consultoria & Posicionamento de Marca',
    featured: true,
    aspectRatio: 'standard',
    demoUrl: 'https://www.marciamenon.com.br',
    keyFeatures: [
      'Apresentação de metodologia e serviços estratégicos de posicionamento',
      'Design editorial sofisticado com leitura fluida e respiro visual',
      'Canal direto para solicitação de diagnósticos e orçamentos',
      'Otimização para motores de busca (SEO) e excelente experiência mobile'
    ],
    mockupTheme: {
      accentColor: '#F9F9F9',
      bgStyle: 'from-[#242424] to-[#151515]',
      tagline: 'Estratégia & Curadoria Visual'
    },
    relatedSlugs: ['stone-cler', 'cardoso-higienizacao', 'drogaria-consolacao']
  },
  {
    id: 'cardoso-higienizacao',
    slug: 'cardoso-higienizacao',
    title: 'Cardoso Higienização',
    category: 'Landing Pages',
    shortDescription: 'Landing page de alta conversão para serviços especializados de higienização e impermeabilização com foco em agilidade de contato via WhatsApp.',
    fullDescription: 'Projeto de landing page para Cardoso Higienização (cardoso-higienizacao.vercel.app), estruturado com foco em conversão rápida (CRO), apresentação visual dos antes e depois dos serviços e botão direto para solicitação de orçamento imediato.',
    problem: 'Clientes buscavam orçamentos rápidos e precisavam de prova social clara de qualidade antes de autorizar o serviço em seus estofados e veículos.',
    solution: 'Estrutura focada em Mobile-First, destaque para resultados e garantias, carregamento em menos de 1 segundo e gatilhos de ação direta pelo WhatsApp.',
    technologies: ['React', 'Tailwind CSS', 'Mobile First', 'CRO', 'Vercel'],
    tags: ['React', 'Tailwind CSS', 'Mobile First', 'CRO', 'Vercel'],
    metrics: 'Carregamento em 0.7s • Foco em conversão',
    year: '2026',
    clientType: 'Serviços Especializados de Higienização',
    featured: false,
    aspectRatio: 'standard',
    demoUrl: 'https://cardoso-higienizacao.vercel.app',
    keyFeatures: [
      'Fluxo direto para solicitação de orçamento rápido no WhatsApp',
      'Galeria de serviços e diferenciais de higienização residencial e automotiva',
      'Carregamento ultrarrápido em conexões 4G/5G móveis',
      'Layout ergonômico desenhado especificamente para o smartphone'
    ],
    mockupTheme: {
      accentColor: '#00DF5E',
      bgStyle: 'from-[#1a231e] to-[#121614]',
      tagline: 'Serviços Especializados • Alta Conversão'
    },
    relatedSlugs: ['stone-cler', 'marcia-menon', 'drogaria-consolacao']
  },
  {
    id: 'drogaria-consolacao',
    slug: 'drogaria-consolacao',
    title: 'Drogaria Consolação',
    category: 'Sites Institucionais',
    shortDescription: 'Website institucional e canal de conveniência para rede farmacêutica com canais rápidos de televendas e atendimento ao cliente.',
    fullDescription: 'Desenvolvimento do portal institucional da Drogaria Consolação (www.drogariaconsolacao.com.br), oferecendo acesso ágil a horários de atendimento, televendas, farmácia popular e localização de unidades físicas com navegação simples e intuitiva.',
    problem: 'Clientes precisavam de um canal confiável e rápido para consultar serviços, medicamentos e enviar receitas diretamente pelo WhatsApp sem atrito.',
    solution: 'Interface leve, limpa e de fácil leitura para todas as faixas etárias, com integração direta para envio de pedidos e receitas pelo WhatsApp e otimização para busca local no Google.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Local', 'Acessibilidade'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Local', 'Acessibilidade'],
    metrics: 'Acessibilidade WCAG • Busca local otimizada',
    year: '2026',
    clientType: 'Saúde, Farmácia & Bem-Estar',
    featured: false,
    aspectRatio: 'standard',
    demoUrl: 'https://www.drogariaconsolacao.com.br',
    keyFeatures: [
      'Botão direto para envio de receitas e televendas no WhatsApp',
      'Informações de contato e localização das unidades físicas',
      'Layout com alto contraste e legibilidade acessível para todas as idades',
      'Carregamento instantâneo em qualquer navegador ou celular'
    ],
    mockupTheme: {
      accentColor: '#00DF5E',
      bgStyle: 'from-[#19221d] to-[#111613]',
      tagline: 'Saúde & Conveniência • Atendimento Rápido'
    },
    relatedSlugs: ['stone-cler', 'marcia-menon', 'cardoso-higienizacao']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'Frontend',
    description: 'Construção de interfaces modernas, rápidas, responsivas e visualmente refinadas.',
    items: [
      { name: 'React', level: 'Avançado', experience: 'Componentização, Hooks, SPA e ecossistema moderno', highlight: true },
      { name: 'TypeScript', level: 'Avançado', experience: 'Tipagem estrita, interfaces seguras e manutenibilidade', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Avançado', experience: 'Manipulação de DOM, assincronia e lógica limpa' },
      { name: 'Tailwind CSS', level: 'Avançado', experience: 'Estilização utilitária, design systems e responsividade', highlight: true },
      { name: 'HTML5 Semântico', level: 'Especialista', experience: 'Acessibilidade, SEO e estruturação de documentos' },
      { name: 'CSS3 Moderno', level: 'Avançado', experience: 'Flexbox, CSS Grid, variáveis e animações fluidas' }
    ]
  },
  {
    category: 'Backend / Integrações',
    description: 'Conexão entre o visual e a lógica de negócios, APIs e automações de processo.',
    items: [
      { name: 'Node.js', level: 'Intermediário/Avançado', experience: 'Criação de servidores leves, scripts e endpoints', highlight: true },
      { name: 'REST APIs', level: 'Avançado', experience: 'Consumo, autenticação por Bearer tokens e tratamento de status', highlight: true },
      { name: 'n8n', level: 'Avançado', experience: 'Automação de fluxos, integração de webhooks e conectores', highlight: true },
      { name: 'Express', level: 'Intermediário', experience: 'Roteamento e middleware para aplicações full-stack' }
    ]
  },
  {
    category: 'Ferramentas',
    description: 'Ambiente de desenvolvimento, design e ferramentas analíticas.',
    items: [
      { name: 'Figma', level: 'Avançado', experience: 'Interpretação de design, tokens, prototipagem e exportação' },
      { name: 'Power BI', level: 'Intermediário', experience: 'Visualização de dados e relatórios gerenciais' },
      { name: 'Vite', level: 'Avançado', experience: 'Build tooling ultra rápido e otimização de bundles', highlight: true },
      { name: 'VS Code', level: 'Avançado', experience: 'Ambiente configurado com linters estritos e extensões produtivas' }
    ]
  },
  {
    category: 'Deploy / Workflow',
    description: 'Controle de versão, integração contínua e publicação em ambientes de alta performance.',
    items: [
      { name: 'Git', level: 'Avançado', experience: 'Controle de versão, branching e histórico organizado', highlight: true },
      { name: 'GitHub', level: 'Avançado', experience: 'Repositórios, automações e colaboração técnica', highlight: true },
      { name: 'Vercel', level: 'Avançado', experience: 'Deploy contínuo, edge functions e ambientes de preview', highlight: true },
      { name: 'CI/CD Pipelines', level: 'Intermediário', experience: 'Verificação automatizada de testes e builds' }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendimento',
    description: 'Compreensão aprofundada do objetivo do projeto, público-alvo, referências visuais e necessidades de negócio.',
    deliverable: 'Briefing consolidado e definição do escopo principal.',
    details: [
      'Alinhamento de expectativas e objetivos principais',
      'Mapeamento do público que utilizará a solução',
      'Análise de referências e pontos de diferenciação',
      'Definição clara do que está dentro do escopo'
    ]
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Definição da estrutura do conteúdo, hierarquia das informações, wireframes e direção estética do projeto.',
    deliverable: 'Estrutura de páginas, fluxo de navegação e paleta visual.',
    details: [
      'Arquitetura de informação orientada à usabilidade',
      'Organização dos blocos e pontos de conversão',
      'Definição da tipografia, cores e ritmo visual',
      'Cronograma estimado das próximas fases'
    ]
  },
  {
    number: '03',
    title: 'Design',
    description: 'Criação da interface visual de alta fidelidade com foco em design editorial, espaçamento e leitura fluida.',
    deliverable: 'Layout responsivo desenhado para desktop, tablet e celular.',
    details: [
      'Desenho de componentes com identidade visual exclusiva',
      'Definição de estados interativos (hover, active, focus)',
      'Seleção de fotografias e elementos gráficos de suporte',
      'Aprovação da direção visual antes do código'
    ]
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Transformação da proposta planejada em código limpo, componentes reutilizáveis e layout 100% responsivo.',
    deliverable: 'Aplicação funcional pronta para navegação e testes.',
    details: [
      'Desenvolvimento com React, TypeScript e Tailwind CSS',
      'Construção focada em responsividade (Mobile First)',
      'Integração de APIs, botões e formulários interativos',
      'Código limpo e modular sem excesso de dependências'
    ]
  },
  {
    number: '05',
    title: 'Refinamento',
    description: 'Ajuste fino de cada detalhe: microinterações, tempos de resposta, testes entre navegadores e checklist de SEO.',
    deliverable: 'Otimização de Core Web Vitals, acessibilidade e checklist de entrega.',
    details: [
      'Otimização de imagens e pontuação no Google Lighthouse',
      'Validação de contraste e navegação acessível',
      'Testes em dispositivos reais (iPhone, Android, Desktop)',
      'Configuração de tags de compartilhamento e SEO'
    ]
  },
  {
    number: '06',
    title: 'Publicação',
    description: 'Publicação no ambiente de produção, configuração de domínio próprio, testes finais e entrega documentada.',
    deliverable: 'Projeto online no ar e instruções de uso.',
    details: [
      'Deploy em plataforma de alta disponibilidade (Vercel)',
      'Configuração e apontamento seguro de domínio / SSL',
      'Verificação de funcionamento pós-lançamento',
      'Suporte inicial para dúvidas e pequenos ajustes'
    ]
  }
];

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    id: '01',
    number: '01',
    question: 'Você cria sites personalizados?',
    answer: 'Sim. Cada projeto é desenvolvido de acordo com o negócio, objetivo e identidade visual do cliente. A estrutura, conteúdo, funcionalidades e visual podem ser personalizados para cada necessidade.',
    q: 'Você cria sites personalizados?',
    a: 'Sim. Cada projeto é desenvolvido de acordo com o negócio, objetivo e identidade visual do cliente. A estrutura, conteúdo, funcionalidades e visual podem ser personalizados para cada necessidade.'
  },
  {
    id: '02',
    number: '02',
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O prazo depende da complexidade do projeto, quantidade de páginas e funcionalidades necessárias. Depois de entender a necessidade do cliente, defino um prazo adequado para o desenvolvimento.',
    q: 'Quanto tempo leva para desenvolver um site?',
    a: 'O prazo depende da complexidade do projeto, quantidade de páginas e funcionalidades necessárias. Depois de entender a necessidade do cliente, defino um prazo adequado para o desenvolvimento.'
  },
  {
    id: '03',
    number: '03',
    question: 'O site funciona no celular?',
    answer: 'Sim. Todos os sites são desenvolvidos com foco em responsividade, adaptando a experiência para celulares, tablets e computadores.',
    q: 'O site funciona no celular?',
    a: 'Sim. Todos os sites são desenvolvidos com foco em responsividade, adaptando a experiência para celulares, tablets e computadores.'
  },
  {
    id: '04',
    number: '04',
    question: 'Posso solicitar alterações durante o projeto?',
    answer: 'Sim. O desenvolvimento acontece de forma alinhada com o cliente, permitindo ajustes e refinamentos durante as etapas de criação até chegar ao resultado esperado.',
    q: 'Posso solicitar alterações durante o projeto?',
    a: 'Sim. O desenvolvimento acontece de forma alinhada com o cliente, permitindo ajustes e refinamentos durante as etapas de criação até chegar ao resultado esperado.'
  },
  {
    id: '05',
    number: '05',
    question: 'Vocês fazem manutenção depois que o site fica pronto?',
    answer: 'Sim. Após a publicação, também posso realizar alterações, atualizações e ajustes no site conforme a necessidade.',
    q: 'Vocês fazem manutenção depois que o site fica pronto?',
    a: 'Sim. Após a publicação, também posso realizar alterações, atualizações e ajustes no site conforme a necessidade.'
  },
  {
    id: '06',
    number: '06',
    question: 'O site pode ter integração com WhatsApp e redes sociais?',
    answer: 'Sim. O projeto pode incluir integrações e botões de contato para WhatsApp, Instagram e outros canais relevantes para o negócio.',
    q: 'O site pode ter integração com WhatsApp e redes sociais?',
    a: 'Sim. O projeto pode incluir integrações e botões de contato para WhatsApp, Instagram e outros canais relevantes para o negócio.'
  },
  {
    id: '07',
    number: '07',
    question: 'Vocês também trabalham com automações?',
    answer: 'Sim. Além do desenvolvimento de sites, também posso desenvolver automações e integrações para otimizar processos e reduzir tarefas manuais, conforme a necessidade do projeto.',
    q: 'Vocês também trabalham com automações?',
    a: 'Sim. Além do desenvolvimento de sites, também posso desenvolver automações e integrações para otimizar processos e reduzir tarefas manuais, conforme a necessidade do projeto.'
  }
];

