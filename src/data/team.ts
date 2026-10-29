export interface TeamMember {
  id: string;
  name: string;
  roleKey: 'nouh' | 'sidali' | 'faycal' | 'sofian' | 'aymen';
  avatar: string;
  avatarFallback: string;
  tags: string[];
  linkedinUrl: string;
  portfolioUrl?: string;
  githubUrl?: string;
  previousExperience?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'faycal',
    name: 'Faycal Rafa',
    roleKey: 'faycal',
    avatar: 'https://avatars.githubusercontent.com/u/111993052?v=4',
    avatarFallback: 'FR',
    tags: ['Go', 'TypeScript', 'PostgreSQL', 'Distributed Systems', 'Android'],
    linkedinUrl: 'https://www.linkedin.com/in/faycal-rafa-89a366249/',
    portfolioUrl: 'https://faycalrafa.github.io/',
    githubUrl: 'https://github.com/faycalrafa',
    previousExperience: 'StoresDZ, AUTOQUAL, Finnetude, PIASSA DZ'
  },
  {
    id: 'sidali',
    name: 'Sid Ali Saadi',
    roleKey: 'sidali',
    avatar: '/assets/team/sidali.jpg',
    avatarFallback: 'SS',
    tags: ['Go', 'Python', 'Kubernetes GKE', 'DT One APIs', 'SvelteKit'],
    linkedinUrl: 'https://www.linkedin.com/in/sid-ali-saadi/',
    portfolioUrl: 'https://saadisidali.github.io/shan-shui-portfolio/',
    githubUrl: 'https://github.com/SaadiSidali',
    previousExperience: 'Yassir, Sabil, Catering Hub, BrandRescue'
  },
  {
    id: 'nouh',
    name: 'Nouh Rafa',
    roleKey: 'nouh',
    avatar: '/assets/team/nouh.jpg',
    avatarFallback: 'NR',
    tags: ['Cloud Infra', 'Docker', 'Linux', 'Microservices', 'CI/CD'],
    linkedinUrl: 'https://www.linkedin.com/in/nouh-rafa-0b9463308/',
    githubUrl: 'https://github.com/nouhcc1',
    previousExperience: 'NextPaper Systems, Cloud Engineering'
  },
  {
    id: 'sofian',
    name: 'Sofian Boutahloula',
    roleKey: 'sofian',
    avatar: '/assets/team/sofian.jpg',
    avatarFallback: 'SB',
    tags: ['Brand Identity', 'UI/UX Design', 'Design Systems', 'Motion'],
    linkedinUrl: 'https://www.linkedin.com/in/sofiane-boutahloula-930881200/',
    previousExperience: 'NextPaper Brand, Product Visual Architecture'
  },
  {
    id: 'aymen',
    name: 'Aymen Bnh',
    roleKey: 'aymen',
    avatar: '/assets/nextpaper-icon.png',
    avatarFallback: 'AB',
    tags: ['Product Marketing', 'GTM Strategy', 'User Acquisition', 'Analytics'],
    linkedinUrl: 'https://www.linkedin.com/company/nextpaper-dev',
    previousExperience: 'StoresDZ Merchant Growth, Digital Strategy'
  }
];
