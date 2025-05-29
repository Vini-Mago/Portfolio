export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  client: string;
  date: string;
  services: string[];
  thumbnail: string;
  images: string[];
  challenge: string;
  solution: string;
  results: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Redesign do Site Corporate Bank',
    slug: 'corporate-bank-website',
    category: 'Web Design',
    description: 'Redesign completo do site institucional do Corporate Bank, focando em melhorar a experiência do usuário e modernizar a identidade visual online.',
    client: 'Corporate Bank',
    date: 'Março 2023',
    services: ['Web Design', 'UX/UI Design', 'Desenvolvimento Front-end', 'SEO'],
    thumbnail: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8370710/pexels-photo-8370710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'O Corporate Bank precisava de uma atualização em seu site institucional, que estava desatualizado e não refletia o posicionamento moderno da empresa. O site antigo também apresentava problemas de usabilidade, principalmente na navegação mobile, e tinha baixas taxas de conversão.',
    solution: 'Desenvolvemos um design totalmente novo, com foco em uma estética moderna e minimalista que reflete a seriedade e confiabilidade do banco. Implementamos uma navegação intuitiva e responsiva, e reorganizamos a arquitetura de informação para facilitar o acesso aos serviços mais procurados pelos clientes.',
    results: 'Após o lançamento do novo site, o Corporate Bank viu um aumento de 45% no tempo médio de permanência dos usuários, uma redução de 35% na taxa de rejeição e um aumento de 62% nas conversões de leads para serviços financeiros. O feedback dos clientes sobre a nova experiência tem sido extremamente positivo.'
  },
  {
    id: 2,
    title: 'E-commerce Moda Sustentável',
    slug: 'moda-sustentavel-ecommerce',
    category: 'E-commerce',
    description: 'Desenvolvimento de uma plataforma de e-commerce completa para uma marca de moda sustentável, com foco em experiência de compra e valores da marca.',
    client: 'EcoFashion',
    date: 'Janeiro 2023',
    services: ['E-commerce', 'Web Design', 'Desenvolvimento', 'Marketing Digital'],
    thumbnail: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5650034/pexels-photo-5650034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'A EcoFashion precisava de uma plataforma de e-commerce que não apenas vendesse seus produtos, mas também comunicasse seus valores de sustentabilidade e ética. Eles queriam destacar-se em um mercado competitivo com uma experiência de compra diferenciada.',
    solution: 'Criamos uma plataforma personalizada com design inspirado na natureza, utilizando elementos visuais que reforçam o compromisso da marca com a sustentabilidade. Implementamos funcionalidades como filtros avançados por materiais sustentáveis, rastreamento da origem dos produtos e calculadora de impacto ambiental das compras.',
    results: 'O novo e-commerce resultou em um aumento de 78% nas vendas online nos primeiros três meses. A EcoFashion viu um crescimento de 40% em sua base de clientes e um aumento significativo no valor médio dos pedidos. O tempo médio de permanência no site também aumentou em 55%.'
  },
  {
    id: 3,
    title: 'Aplicativo Saúde & Bem-estar',
    slug: 'app-saude-bem-estar',
    category: 'Design de App',
    description: 'Design e desenvolvimento de um aplicativo de saúde e bem-estar que permite aos usuários acompanhar atividades físicas, alimentação e meditação.',
    client: 'Viva Bem',
    date: 'Novembro 2022',
    services: ['UI/UX Design', 'Desenvolvimento Mobile', 'Estratégia de Produto'],
    thumbnail: 'https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'A Viva Bem queria criar um aplicativo intuitivo e motivador que ajudasse seus usuários a manterem uma vida saudável. O desafio era integrar diversas funcionalidades relacionadas a diferentes aspectos da saúde em uma interface coesa e fácil de usar.',
    solution: 'Desenvolvemos um aplicativo com uma interface limpa e moderna, utilizando visualizações de dados intuitivas para mostrar o progresso dos usuários. Implementamos gamificação para aumentar o engajamento e personalização baseada em IA para adaptar as recomendações ao perfil de cada usuário.',
    results: 'O aplicativo alcançou mais de 100.000 downloads nos primeiros seis meses, com uma taxa de retenção de 45% após 30 dias, muito acima da média do setor. A avaliação média nas lojas de aplicativos é de 4.8/5, com feedback positivo sobre a facilidade de uso e o design intuitivo.'
  },
  {
    id: 4,
    title: 'Branding Cafeteria Artesanal',
    slug: 'branding-cafeteria-artesanal',
    category: 'Branding',
    description: 'Desenvolvimento completo da identidade visual para uma nova rede de cafeterias artesanais, incluindo logo, paleta de cores, tipografia e aplicações.',
    client: 'Café & Arte',
    date: 'Agosto 2022',
    services: ['Branding', 'Design Gráfico', 'Identidade Visual', 'Estratégia de Marca'],
    thumbnail: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5048779/pexels-photo-5048779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5691640/pexels-photo-5691640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'A Café & Arte estava entrando em um mercado competitivo e precisava de uma identidade de marca que comunicasse seu compromisso com a qualidade artesanal e criasse uma conexão emocional com os clientes. Eles queriam se diferenciar das grandes redes e destacar seu aspecto artístico.',
    solution: 'Criamos uma identidade visual única que combina elementos artesanais e modernos. Desenvolvemos um logo que representa a conexão entre o café e a arte, com uma paleta de cores terrosas complementada por tons vibrantes. Aplicamos a identidade em todos os pontos de contato, desde embalagens até o ambiente das lojas.',
    results: 'A nova identidade foi fundamental para o sucesso do lançamento da marca, com as três primeiras lojas atingindo o ponto de equilíbrio financeiro em apenas quatro meses. A marca ganhou rápido reconhecimento no mercado local e foi destacada em publicações especializadas do setor de food service e design.'
  },
  {
    id: 5,
    title: 'Portal de Notícias Tecnologia',
    slug: 'portal-noticias-tecnologia',
    category: 'Web Design',
    description: 'Redesign e desenvolvimento de um portal de notícias especializado em tecnologia e inovação, com foco em experiência de leitura e monetização.',
    client: 'TechNews Brasil',
    date: 'Junho 2022',
    services: ['Web Design', 'Desenvolvimento', 'Arquitetura de Informação', 'SEO'],
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6353654/pexels-photo-6353654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'O TechNews Brasil enfrentava problemas de retenção de leitores e monetização. O portal antigo tinha tempos de carregamento longos, experiência mobile deficiente e baixo engajamento, resultando em receitas publicitárias decrescentes.',
    solution: 'Redesenhamos completamente o portal com foco em performance e experiência do usuário. Implementamos um sistema de categorização intuitivo, melhoramos a hierarquia visual das notícias e desenvolvemos um sistema de recomendação personalizada. Otimizamos a experiência mobile e os tempos de carregamento.',
    results: 'O novo portal viu um aumento de 125% no tempo médio de permanência, 70% mais páginas visualizadas por sessão e um crescimento de 95% na receita publicitária. O tráfego orgânico cresceu 65% nos seis meses após o lançamento, graças às otimizações de SEO implementadas.'
  },
  {
    id: 6,
    title: 'Campanha Marketing Digital Academia',
    slug: 'campanha-marketing-academia',
    category: 'Marketing Digital',
    description: 'Estratégia e execução de campanha digital integrada para rede de academias, incluindo criação de conteúdo, gestão de mídias sociais e campanhas de performance.',
    client: 'FitLife Academias',
    date: 'Abril 2022',
    services: ['Marketing Digital', 'Gestão de Mídias Sociais', 'Criação de Conteúdo', 'Campanhas PPC'],
    thumbnail: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4498605/pexels-photo-4498605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4498228/pexels-photo-4498228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'A FitLife Academias precisava aumentar o número de matrículas em suas 12 unidades e reduzir a taxa de cancelamento. A marca enfrentava forte concorrência e precisava se destacar com uma comunicação diferenciada que ressaltasse seus diferenciais.',
    solution: 'Desenvolvemos uma estratégia digital integrada, incluindo a criação de conteúdo educativo e motivacional, redesign das mídias sociais, e campanhas segmentadas por geolocalização. Implementamos estratégias de remarketing e criamos landing pages específicas para diferentes públicos-alvo.',
    results: 'A campanha resultou em um aumento de 85% nas matrículas durante o período da campanha, comparado ao mesmo período do ano anterior. O custo por aquisição de cliente diminuiu em 40% e a taxa de engajamento nas redes sociais aumentou em 150%. A taxa de cancelamento diminuiu 25% nos seis meses seguintes.'
  }
];