export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  theme: string;
  visual: 'api' | 'database' | 'workflow' | 'reliability';
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
}

export const profile = {
  name: 'Ashraf Farag Allah',
  role: 'Senior Backend Developer',
  positioning: 'Senior Backend Developer / Full Stack Developer',
  subtitle: 'C#/.NET - REST APIs - Oracle - SQL Server - Angular - Enterprise Integrations',
  pitch:
    'I build and improve business-critical systems where reliability, performance, data accuracy, and maintainability matter.',
  location: 'Cairo, Egypt',
  linkedin: 'https://www.linkedin.com/in/ashraf-farag-allah-90860019b/',
  github: 'https://github.com/faragashraf',
  email: 'farag.ashraf@icloud.com',
  phone: '+201551111732',
  phoneHref: 'tel:+201551111732',
  whatsapp: 'https://wa.me/201551111732',
  availability:
    'Open to selected backend, .NET, enterprise integration, and technical leadership opportunities',
  image: '/assets/profile.jpg',
  cv: '/assets/Ashraf-Farag-CV.pdf',
};

export const aboutText = [
  'I am a Senior Backend / Full Stack Developer specializing in C#/.NET, REST APIs, Oracle, SQL Server, Angular, and enterprise system integrations.',
  'I focus on building and improving business-critical systems where reliability, performance, data accuracy, and maintainability matter. My work includes backend development, API design, database-driven applications, enterprise integrations, production troubleshooting, reporting workflows, and performance optimization.',
  'I combine software engineering with systems analysis, which helps me understand business requirements deeply and turn them into stable, practical, and scalable technical solutions.',
];

export const expertise: ExpertiseItem[] = [
  {
    title: 'Backend Engineering',
    description: 'C#/.NET, ASP.NET Core, REST APIs, service design',
    icon: 'server',
  },
  {
    title: 'Database Systems',
    description: 'SQL Server, Oracle, stored procedures, reporting, performance tuning',
    icon: 'database',
  },
  {
    title: 'Enterprise Integrations',
    description: 'Data exchange, validation flows, internal and external platform integration',
    icon: 'integration',
  },
  {
    title: 'Production Reliability',
    description: 'IIS, logs, scheduled jobs, troubleshooting, root-cause analysis',
    icon: 'reliability',
  },
  {
    title: 'Frontend Delivery',
    description: 'Angular, TypeScript, responsive internal tools, dynamic forms',
    icon: 'frontend',
  },
  {
    title: 'System Analysis',
    description: 'Requirements analysis, workflow mapping, documentation, business alignment',
    icon: 'analysis',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'Enterprise API & Integration Platform',
    description:
      'Backend APIs and data integration flows for enterprise environments, focused on reliability, validation, and operational accuracy.',
    theme: 'Reliable integration delivery',
    visual: 'api',
    tags: ['.NET', 'REST APIs', 'Oracle', 'SQL Server', 'Integration'],
  },
  {
    title: 'Database Reporting & Performance Optimization',
    description:
      'Complex SQL Server and Oracle reporting logic, stored procedures, data extraction, and performance-focused query improvements.',
    theme: 'Data accuracy and speed',
    visual: 'database',
    tags: ['SQL Server', 'Oracle', 'Stored Procedures', 'Reporting', 'Performance'],
  },
  {
    title: 'Internal Workflow & Dynamic Forms System',
    description:
      'Workflow and dynamic form solutions using metadata-driven forms, validation rules, backend services, and user-focused operational screens.',
    theme: 'Operational workflow clarity',
    visual: 'workflow',
    tags: ['.NET', 'Angular', 'TypeScript', 'APIs', 'System Analysis'],
  },
  {
    title: 'Production Troubleshooting & Reliability',
    description:
      'Investigated and resolved production issues across APIs, database layers, scheduled jobs, logs, IIS-hosted applications, and integration flows.',
    theme: 'Production stability',
    visual: 'reliability',
    tags: ['Troubleshooting', 'IIS', 'Logs', 'APIs', 'Reliability'],
  },
];

export const techStack = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'REST APIs',
  'SQL Server',
  'Oracle',
  'Angular',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'IIS',
  'Git',
  'Postman',
  'Performance Optimization',
  'System Analysis',
];

export const certifications: CertificationItem[] = [
  {
    title: 'Project Management Professional (PMP)',
    issuer: 'ACICIT / Egypt Post',
    date: 'February 2023',
    image: '/assets/certificates/certificate-01-project-management.jpg',
    category: 'Project Management',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Forage / Tata',
    date: 'March 2023',
    image: '/assets/certificates/certificate-03-data-visualization.jpg',
    category: 'Data & Analytics',
  },
  {
    title: 'Digital Transformation',
    issuer: 'Egyptian Banking Institute / Central Bank of Egypt',
    date: 'June 2021',
    image: '/assets/certificates/certificate-02-digital-transformation.jpg',
    category: 'Digital Transformation',
  },
  {
    title: 'Advanced Excel',
    issuer: 'ACICT',
    date: 'April 2018',
    image: '/assets/certificates/certificate-advanced-excel.jpg',
    category: 'Data & Productivity',
  },
  {
    title: 'Financial Inclusion',
    issuer: 'Egyptian Banking Institute / Central Bank of Egypt',
    date: 'August 2021',
    image: '/assets/certificates/certificate-financial-inclusion.jpg',
    category: 'Financial Services',
  },
  {
    title: 'Effective Communication',
    issuer: 'ACICT',
    date: 'May 2017',
    image: '/assets/certificates/certificate-effective-communication.jpg',
    category: 'Communication',
  },
  {
    title: 'Positive Behaviors',
    issuer: 'Harvest Training and Education Center',
    date: 'January 2017',
    image: '/assets/certificates/certificate-positive-behaviors.jpg',
    category: 'Soft Skills',
  },
  {
    title: 'Integrated ISO 9001, ISO 14001 & OHSAS 18001 Internal Auditing',
    issuer: 'EMSI',
    date: 'April 2010',
    image: '/assets/certificates/certificate-04-quality-iso-internal-auditing.jpg',
    category: 'Quality & Auditing',
  },
  {
    title: 'Integrated System Management Awareness',
    issuer: 'EMSI',
    date: 'January 2010',
    image: '/assets/certificates/certificate-04-quality-iso-awareness.jpg',
    category: 'Quality & Management',
  },
];

export const experience = {
  role: 'Senior Backend Developer / Technical Lead',
  company: 'Egypt Post',
  bullets: [
    'Design, develop, and maintain enterprise-grade backend systems using .NET, SQL Server, and Oracle.',
    'Build and support REST APIs and integrations between internal platforms and enterprise/government systems.',
    'Analyze business requirements and convert them into reliable, maintainable technical solutions.',
    'Work on database-driven workflows, reporting, stored procedures, and data validation processes.',
    'Troubleshoot production issues across APIs, IIS-hosted services, scheduled jobs, and database layers.',
    'Improve system reliability, performance, and operational data accuracy.',
    'Collaborate with business, support, and technical teams to deliver stable internal systems.',
  ],
};

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    label: 'WhatsApp',
    value: 'Message on WhatsApp',
    href: profile.whatsapp,
  },
  {
    label: 'LinkedIn',
    value: 'ashraf-farag-allah-90860019b',
    href: profile.linkedin,
  },
  {
    label: 'GitHub',
    value: 'faragashraf',
    href: profile.github,
  },
  {
    label: 'Location',
    value: profile.location,
  },
];
