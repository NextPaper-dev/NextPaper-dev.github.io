export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    storesdz: string;
    team: string;
    services: string;
    contact: string;
    view_github: string;
    status_online: string;
  };
  hero: {
    badge: string;
    title_line1: string;
    title_line2: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    trust_speed: string;
    trust_scale: string;
    trust_deploy: string;
    cli_label: string;
  };
  storesdz: {
    badge: string;
    title: string;
    subtitle: string;
    minimal_notice: string;
    request_demo: string;
    view_repo: string;
    screenshots: {
      landing: string;
      dashboard: string;
      templates: string;
      storefront: string;
      settings: string;
    };
    stats: {
      latency: string;
      latency_label: string;
      throughput: string;
      throughput_label: string;
      bundle: string;
      bundle_label: string;
    };
  };
  team: {
    badge: string;
    title: string;
    subtitle: string;
    view_team_button: string;
    modal_title: string;
    modal_subtitle: string;
    close_modal: string;
    roles: {
      nouh: string;
      sidali: string;
      faycal: string;
      sofian: string;
      aymen: string;
    };
    bios: {
      nouh: string;
      sidali: string;
      faycal: string;
      sofian: string;
      aymen: string;
    };
  };
  capabilities: {
    badge: string;
    title: string;
    subtitle: string;
    pillars: Array<{
      title: string;
      description: string;
      badge: string;
    }>;
  };
  footer: {
    tagline: string;
    status_operational: string;
    rights: string;
    links_title: string;
    team_title: string;
    contact_title: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      storesdz: 'StoresDZ',
      team: 'Our Team',
      services: 'Startup Acceleration',
      contact: 'Get in Touch',
      view_github: 'GitHub',
      status_online: 'NextPaper Engine v2.4 Online'
    },
    hero: {
      badge: 'NEXTPAPER SYSTEMS SQUAD',
      title_line1: 'High-Velocity Systems.',
      title_line2: 'Engineering Startups to Scale.',
      subtitle: 'We are an elite collective of systems architects, backend engineers, and product designers. We build mission-critical infrastructure, ultra-fast runtimes, and help ambitious startups get on their feet.',
      cta_primary: 'Meet Our Team',
      cta_secondary: 'Explore Flagship: StoresDZ',
      trust_speed: 'Sub-millisecond Runtimes',
      trust_scale: 'Zero-Lag Concurrency',
      trust_deploy: 'Production Ready in Weeks',
      cli_label: 'Quick Engine Simulation:'
    },
    storesdz: {
      badge: 'CURRENT FLAGSHIP PRODUCT',
      title: 'StoresDZ Multi-Tenant Commerce',
      subtitle: 'A high-throughput e-commerce platform combining a Go Gin API core, Rust Liquid compiler, and an autonomous edge funnel runtime.',
      minimal_notice: 'Showing a preview of our flagship platform. More enterprise systems currently in active development.',
      request_demo: 'Request Demo',
      view_repo: 'Request Demo',
      screenshots: {
        landing: 'Commerce Landing',
        dashboard: 'Merchant Admin',
        templates: 'Store Templates',
        storefront: 'High-Converting Store',
        settings: 'Domain & Webhooks'
      },
      stats: {
        latency: '< 0.8ms',
        latency_label: 'Rust compile p99',
        throughput: '25,000+',
        throughput_label: 'req / sec concurrency',
        bundle: '12.4 KB',
        bundle_label: 'Funnel SDK gzip'
      }
    },
    team: {
      badge: 'THE SQUAD',
      title: 'Built by Engineers for Builders',
      subtitle: 'From day-zero architecture and high-throughput databases to brand identity and growth marketing, our team provides the full technical firepower startups need.',
      view_team_button: 'View Full Team & Disciplines',
      modal_title: 'The NextPaper Collective',
      modal_subtitle: 'Meet the engineering and product minds powering NextPaper and StoresDZ.',
      close_modal: 'Close',
      roles: {
        nouh: 'Systems & Infrastructure Engineer',
        sidali: 'Cloud & Backend Systems Engineer',
        faycal: 'Technical Lead & Systems Architect',
        sofian: 'Lead Brand & Graphical Designer',
        aymen: 'Products Marketing Manager'
      },
      bios: {
        nouh: 'Specializes in distributed infrastructure, cloud deployments, and resilient network microservices. Drives foundational cloud orchestration across NextPaper systems.',
        sidali: 'Software Engineer with experience at Yassir. Specializes in Go/Python microservices, transaction & airtime APIs, Kubernetes (GKE), and observability.',
        faycal: 'Technical Lead with 6+ years architecting scalable backends, multi-tenant databases, native offline-first mobile apps, and StoresDZ core engine.',
        sofian: 'Crafts distinctive brand identities, design systems, and conversion-optimized visual interfaces for high-growth digital platforms.',
        aymen: 'Leads product marketing, go-to-market execution, merchant acquisition funnels, and product-market fit discovery for NextPaper platforms.'
      }
    },
    capabilities: {
      badge: 'STARTUP ACCELERATION',
      title: 'How We Get Startups Up on Their Feet',
      subtitle: 'We eliminate technical debt before it starts, providing hands-on architecture, code, and design.',
      pillars: [
        {
          title: 'Day-Zero Systems Architecture',
          description: 'Stack selection, database normalization, and distributed cloud topology designed for frictionless scale.',
          badge: 'Architecture'
        },
        {
          title: 'High-Concurrency Backends',
          description: 'Production-grade Go and Rust services with zero ORM overhead, NATS event buses, and sub-millisecond p99 latencies.',
          badge: 'Backend'
        },
        {
          title: 'High-Converting Web Applications',
          description: 'Astro, React, and Next.js frontends engineered for instant Core Web Vitals and top-tier user retention.',
          badge: 'Frontend'
        },
        {
          title: 'Brand Identity & Product Positioning',
          description: 'World-class visual design, design tokens, product storytelling, and go-to-market sales funnels.',
          badge: 'Strategy'
        }
      ]
    },
    footer: {
      tagline: 'High-profile software development collective & systems studio.',
      status_operational: 'All NextPaper Systems Operational',
      rights: 'All rights reserved.',
      links_title: 'Ecosystem',
      team_title: 'Team & Expertise',
      contact_title: 'Partner with Us'
    }
  },
  fr: {
    nav: {
      storesdz: 'StoresDZ',
      team: 'Notre Équipe',
      services: 'Accélération Startups',
      contact: 'Nous Contacter',
      view_github: 'GitHub',
      status_online: 'Moteur NextPaper v2.4 En Ligne'
    },
    hero: {
      badge: 'COLLECTIF SYSTÈMES NEXTPAPER',
      title_line1: 'Systèmes Haute Vélocité.',
      title_line2: 'Propulser les Startups vers l\'Échelle.',
      subtitle: 'Nous sommes un collectif d\'élite d\'architectes systèmes, d\'ingénieurs backend et de designers produit. Nous concevons des infrastructures critiques, des moteurs ultra-rapides et accompagnons les startups ambitieuses de A à Z.',
      cta_primary: 'Découvrir Notre Équipe',
      cta_secondary: 'Projet Phare: StoresDZ',
      trust_speed: 'Runtimes Sous la Milliseconde',
      trust_scale: 'Concurrence Sans Latence',
      trust_deploy: 'Prêt pour la Production en Semaines',
      cli_label: 'Simulation Rapide du Moteur :'
    },
    storesdz: {
      badge: 'PRODUIT PHARE ACTUEL',
      title: 'Commerce Multi-Tenant StoresDZ',
      subtitle: 'Une plateforme e-commerce à très haut débit combinant un cœur d\'API Go Gin, un compilateur Rust Liquid et un runtime autonome d\'entonnoirs de vente.',
      minimal_notice: 'Aperçu condensé de notre plateforme phare. D\'autres systèmes d\'entreprise sont actuellement en développement actif.',
      request_demo: 'Demander une Démo',
      view_repo: 'Demander une Démo',
      screenshots: {
        landing: 'Page d\'Accueil Commerce',
        dashboard: 'Tableau de Bord Marchand',
        templates: 'Modèles de Boutiques',
        storefront: 'Boutique Haute Conversion',
        settings: 'Domaines & Webhooks'
      },
      stats: {
        latency: '< 0.8ms',
        latency_label: 'Compilation Rust p99',
        throughput: '25 000+',
        throughput_label: 'req / sec simultanées',
        bundle: '12.4 Ko',
        bundle_label: 'SDK Funnel gzippé'
      }
    },
    team: {
      badge: 'L\'ÉQUIPE',
      title: 'Conçu par des Ingénieurs pour les Bâtisseurs',
      subtitle: 'De l\'architecture initiale aux bases de données haut débit, en passant par l\'identité de marque et le marketing de croissance, nous fournissons toute la puissance technique aux startups.',
      view_team_button: 'Voir Toute l\'Équipe & Spécialités',
      modal_title: 'Le Collectif NextPaper',
      modal_subtitle: 'Découvrez les ingénieurs et experts produit qui propulsent NextPaper et StoresDZ.',
      close_modal: 'Fermer',
      roles: {
        nouh: 'Ingénieur Systèmes & Infrastructure',
        sidali: 'Ingénieur Cloud & Systèmes Backend',
        faycal: 'Lead Technique & Architecte Systèmes',
        sofian: 'Lead Designer Graphique & Image de Marque',
        aymen: 'Responsable Marketing Produit'
      },
      bios: {
        nouh: 'Expert en infrastructures distribuées, déploiements cloud et microservices réseau résilients. Pilote l\'orchestration cloud sur l\'ensemble des systèmes NextPaper.',
        sidali: 'Ingénieur logiciel ayant exercé chez Yassir. Spécialiste des microservices Go/Python, des API de transactions, de Kubernetes (GKE) et de l\'observabilité.',
        faycal: 'Lead technique avec plus de 6 ans d\'expérience dans l\'architecture de backends distribués, de bases multi-tenants, d\'applications mobiles natives et du cœur StoresDZ.',
        sofian: 'Crée des identités de marque singulières, des design systems complets et des interfaces visuelles à fort taux de conversion pour plateformes numériques.',
        aymen: 'Pilote le marketing produit, la stratégie go-to-market, les tunnels d\'acquisition marchands et la recherche du product-market fit pour NextPaper.'
      }
    },
    capabilities: {
      badge: 'ACCOMPAGNEMENT STARTUP',
      title: 'Comment Nous Mettons les Startups sur Pieds',
      subtitle: 'Nous éliminons la dette technique dès le premier jour grâce à une expertise concrète en architecture, code et design.',
      pillars: [
        {
          title: 'Architecture Systèmes Dès le Jour 0',
          description: 'Sélection des stacks, schémas de données normalisés et topologies cloud conçues pour une montée en charge fluide.',
          badge: 'Architecture'
        },
        {
          title: 'Backends Haute Concurrence',
          description: 'Services Go et Rust de qualité production sans surcoût d\'ORM, bus d\'événements NATS et latences p99 inférieures à la milliseconde.',
          badge: 'Backend'
        },
        {
          title: 'Applications Web Haute Conversion',
          description: 'Frontends Astro, React et Next.js optimisés pour d\'excellents Core Web Vitals et une rétention utilisateur maximale.',
          badge: 'Frontend'
        },
        {
          title: 'Identité de Marque & Positionnement',
          description: 'Design visuel d\'exception, tokens graphiques, narration produit et tunnels de conversion marketing.',
          badge: 'Stratégie'
        }
      ]
    },
    footer: {
      tagline: 'Collectif de développement logiciel d\'élite & studio de systèmes.',
      status_operational: 'Tous les Systèmes NextPaper Opérationnels',
      rights: 'Tous droits réservés.',
      links_title: 'Écosystème',
      team_title: 'Équipe & Expertise',
      contact_title: 'Collaborer avec Nous'
    }
  }
};
