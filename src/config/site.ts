import { Palette } from 'lucide-react';

export interface SiteConfig {
  name: string;
  description: string;
  logo: {
    icon: typeof Palette;
    text: string;
    coloredText: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: {
      weekdays: string;
      saturday: string;
    };
    social: {
      facebook: string;
      instagram: string;
      twitter: string;
      linkedin: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    story: {
      title: string;
      paragraphs: string[];
      quote: {
        text: string;
        author: string;
      };
    };
    mission: string;
    vision: string;
    values: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  stats: Array<{
    value: number;
    label: string;
  }>;
  team: {
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      position: string;
      image: string;
      social: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
      };
    }>;
  };
  testimonials: Array<{
    content: string;
    author: string;
    position: string;
    image: string;
  }>;
  clients: Array<{
    name: string;
    logo: string;
  }>;
  projects: Array<{
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
  }>;
  footer: {
    description: string;
    quickLinks: Array<{
      label: string;
      href: string;
    }>;
    services: Array<{
      label: string;
      href: string;
    }>;
    legal: {
      privacy: string;
      terms: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "Westy Creative",
  description: "Agência de Design e Desenvolvimento",
  logo: {
    icon: Palette,
    text: "Westy",
    coloredText: "Creative"
  },
  contact: {
    phone: "+55 11 9876-5432",
    email: "contato@westycreative.com",
    address: "Av. Paulista, 1000, São Paulo, SP",
    hours: {
      weekdays: "Segunda a Sexta: 9h às 18h",
      saturday: "Sábado: 9h às 13h"
    },
    social: {
      facebook: "https://facebook.com/westycreative",
      instagram: "https://instagram.com/westycreative",
      twitter: "https://twitter.com/westycreative",
      linkedin: "https://linkedin.com/company/westycreative"
    }
  },
  hero: {
    title: "Transformamos ideias em experiências digitais memoráveis",
    subtitle: "Somos uma agência criativa dedicada a desenvolver soluções digitais que conectam marcas e pessoas através de design excepcional e tecnologia inovadora.",
    cta: {
      primary: "Iniciar Projeto",
      secondary: "Ver Portfólio"
    }
  },
  about: {
    title: "Sobre Nós",
    subtitle: "Conheça nossa história, valores e a equipe por trás da Westy Creative.",
    story: {
      title: "Nossa História",
      paragraphs: [
        "A Westy Creative nasceu em 2007 da paixão de três amigos por design e tecnologia. O que começou como um pequeno estúdio em São Paulo, hoje é uma agência premiada com clientes em todo o Brasil e América Latina.",
        "Nos primeiros anos, focamos principalmente em design gráfico e identidade visual. Com o crescimento da web, expandimos nossa atuação para o desenvolvimento de websites e, posteriormente, marketing digital e experiências interativas.",
        "Hoje, contamos com uma equipe multidisciplinar de mais de 30 profissionais apaixonados por criar experiências digitais inovadoras e impactantes que transformam negócios e conectam marcas com seu público."
      ],
      quote: {
        text: "Acreditamos que grandes designs nascem da colaboração entre criatividade e estratégia.",
        author: "Ricardo Almeida, Fundador"
      }
    },
    mission: "Criar experiências digitais excepcionais que transformam negócios e conectam marcas com seu público de forma autêntica e memorável.",
    vision: "Ser reconhecida como a agência criativa mais inovadora e confiável da América Latina, definindo novos padrões de excelência em design e tecnologia.",
    values: [
      "Excelência criativa em cada detalhe",
      "Inovação constante e aprendizado contínuo",
      "Transparência e honestidade em todas as relações",
      "Colaboração e trabalho em equipe"
    ]
  },
  services: {
    title: "Nossos Serviços",
    subtitle: "Oferecemos soluções digitais completas para impulsionar o seu negócio no ambiente online.",
    items: [
      {
        icon: "Monitor",
        title: "Design de Websites",
        description: "Criamos websites personalizados e responsivos que representam sua marca e engajam seus visitantes."
      },
      {
        icon: "Code",
        title: "Desenvolvimento Web",
        description: "Desenvolvemos soluções web de alta performance utilizando as tecnologias mais modernas do mercado."
      },
      {
        icon: "PenTool",
        title: "Branding & Identidade",
        description: "Construímos identidades visuais memoráveis que comunicam a essência e os valores de sua marca."
      },
      {
        icon: "Smartphone",
        title: "Design UI/UX",
        description: "Projetamos interfaces intuitivas e experiências de usuário que transformam visitantes em clientes."
      },
      {
        icon: "ShoppingBag",
        title: "E-commerce",
        description: "Desenvolvemos lojas online otimizadas para conversão e com uma experiência de compra superior."
      },
      {
        icon: "BarChart",
        title: "Marketing Digital",
        description: "Estratégias de marketing digital para aumentar sua visibilidade online e gerar mais resultados."
      }
    ]
  },
  stats: [
    { value: 150, label: "Projetos Concluídos" },
    { value: 18, label: "Anos de Experiência" },
    { value: 35, label: "Prêmios Conquistados" },
    { value: 120, label: "Clientes Satisfeitos" }
  ],
  team: {
    title: "Conheça Nossa Equipe",
    subtitle: "Profissionais talentosos e apaixonados por criar experiências digitais excepcionais.",
    members: [
      {
        name: "Ricardo Almeida",
        position: "CEO & Diretor Criativo",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      {
        name: "Amanda Souza",
        position: "Diretora de UX/UI",
        image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      {
        name: "Fernando Costa",
        position: "Desenvolvedor Full Stack",
        image: "https://images.pexels.com/photos/4064698/pexels-photo-4064698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      {
        name: "Carla Ribeiro",
        position: "Gerente de Projetos",
        image: "https://images.pexels.com/photos/3786534/pexels-photo-3786534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#"
        }
      }
    ]
  },
  testimonials: [
    {
      content: "A Westy Creative superou todas as nossas expectativas. Eles transformaram nossa presença online e ajudaram a aumentar significativamente nossas conversões. Altamente recomendado!",
      author: "Maria Silva",
      position: "Diretora de Marketing, TechBr",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "Trabalhar com a equipe da Westy Creative foi uma experiência incrível. Profissionais talentosos que realmente se importam com o sucesso de seus clientes e entregam resultados excepcionais.",
      author: "Carlos Mendes",
      position: "CEO, Inovare Solutions",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "Nosso e-commerce teve um aumento de 150% nas vendas após o redesign realizado pela Westy Creative. A equipe foi extremamente profissional e atenciosa durante todo o processo.",
      author: "Ana Paula Costa",
      position: "Fundadora, Beleza Natural",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  clients: [
    {
      name: "Empresa 1",
      logo: "https://images.pexels.com/photos/12927306/pexels-photo-12927306.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Empresa 2",
      logo: "https://images.pexels.com/photos/12927324/pexels-photo-12927324.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Empresa 3",
      logo: "https://images.pexels.com/photos/12927285/pexels-photo-12927285.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Empresa 4",
      logo: "https://images.pexels.com/photos/12927249/pexels-photo-12927249.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Empresa 5",
      logo: "https://images.pexels.com/photos/12927255/pexels-photo-12927255.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Empresa 6",
      logo: "https://images.pexels.com/photos/12927244/pexels-photo-12927244.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Redesign do Site Corporate Bank",
      slug: "corporate-bank-website",
      category: "Web Design",
      description: "Redesign completo do site institucional do Corporate Bank, focando em melhorar a experiência do usuário e modernizar a identidade visual online.",
      client: "Corporate Bank",
      date: "Março 2023",
      services: ["Web Design", "UX/UI Design", "Desenvolvimento Front-end", "SEO"],
      thumbnail: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      images: [
        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/8370710/pexels-photo-8370710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ],
      challenge: "O Corporate Bank precisava de uma atualização em seu site institucional, que estava desatualizado e não refletia o posicionamento moderno da empresa. O site antigo também apresentava problemas de usabilidade, principalmente na navegação mobile, e tinha baixas taxas de conversão.",
      solution: "Desenvolvemos um design totalmente novo, com foco em uma estética moderna e minimalista que reflete a seriedade e confiabilidade do banco. Implementamos uma navegação intuitiva e responsiva, e reorganizamos a arquitetura de informação para facilitar o acesso aos serviços mais procurados pelos clientes.",
      results: "Após o lançamento do novo site, o Corporate Bank viu um aumento de 45% no tempo médio de permanência dos usuários, uma redução de 35% na taxa de rejeição e um aumento de 62% nas conversões de leads para serviços financeiros. O feedback dos clientes sobre a nova experiência tem sido extremamente positivo."
    },
    {
      id: 2,
      title: "E-commerce Moda Sustentável",
      slug: "moda-sustentavel-ecommerce",
      category: "E-commerce",
      description: "Desenvolvimento de uma plataforma de e-commerce completa para uma marca de moda sustentável, com foco em experiência de compra e valores da marca.",
      client: "EcoFashion",
      date: "Janeiro 2023",
      services: ["E-commerce", "Web Design", "Desenvolvimento", "Marketing Digital"],
      thumbnail: "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      images: [
        "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/5650034/pexels-photo-5650034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ],
      challenge: "A EcoFashion precisava de uma plataforma de e-commerce que não apenas vendesse seus produtos, mas também comunicasse seus valores de sustentabilidade e ética. Eles queriam destacar-se em um mercado competitivo com uma experiência de compra diferenciada.",
      solution: "Criamos uma plataforma personalizada com design inspirado na natureza, utilizando elementos visuais que reforçam o compromisso da marca com a sustentabilidade. Implementamos funcionalidades como filtros avançados por materiais sustentáveis, rastreamento da origem dos produtos e calculadora de impacto ambiental das compras.",
      results: "O novo e-commerce resultou em um aumento de 78% nas vendas online nos primeiros três meses. A EcoFashion viu um crescimento de 40% em sua base de clientes e um aumento significativo no valor médio dos pedidos. O tempo médio de permanência no site também aumentou em 55%."
    }
  ],
  footer: {
    description: "Criamos experiências digitais que transformam negócios e encantam pessoas.",
    quickLinks: [
      { label: "Início", href: "/" },
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Portfólio", href: "/portfolio" },
      { label: "Contato", href: "/contato" }
    ],
    services: [
      { label: "Design de Websites", href: "/portfolio" },
      { label: "Desenvolvimento Web", href: "/portfolio" },
      { label: "Branding & Identidade", href: "/portfolio" },
      { label: "Marketing Digital", href: "/portfolio" },
      { label: "UI/UX Design", href: "/portfolio" }
    ],
    legal: {
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço"
    }
  }
};