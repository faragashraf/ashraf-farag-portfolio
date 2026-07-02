export interface ExpertiseItem {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
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
  image: '/assets/profile.jpg',
  cv: '/assets/Ashraf-Farag-CV.pdf'
};

export const aboutText = [
  'I am a Senior Backend / Full Stack Developer specializing in C#/.NET, REST APIs, Oracle, SQL Server, Angular, and enterprise system integrations.',
  'I focus on building and improving business-critical systems where reliability, performance, data accuracy, and maintainability matter. My work includes backend development, API design, database-driven applications, enterprise integrations, production troubleshooting, reporting workflows, and performance optimization.',
  'I combine software engineering with systems analysis, which helps me understand business requirements deeply and turn them into stable, practical, and scalable technical solutions.'
];

export const expertise: ExpertiseItem[] = [
  {
    title: 'Backend Development',
    description: 'C#/.NET, ASP.NET Core, REST APIs, service architecture'
  },
  {
    title: 'Database Systems',
    description: 'SQL Server, Oracle, stored procedures, reporting, validation, performance'
  },
  {
    title: 'Enterprise Integrations',
    description: 'Internal platforms, enterprise integrations, data exchange, operational accuracy'
  },
  {
    title: 'Frontend & Internal Tools',
    description: 'Angular, TypeScript, dynamic forms, dashboards, internal portals'
  },
  {
    title: 'Production Support',
    description: 'IIS, logs, scheduled jobs, troubleshooting, root-cause analysis'
  },
  {
    title: 'System Analysis',
    description: 'Requirements analysis, workflow mapping, technical documentation, business alignment'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'Enterprise API & Integration Platform',
    description:
      'Designed and supported backend APIs and data integration flows for enterprise systems, focusing on reliability, validation, and operational accuracy.',
    image: '/assets/projects/project-01-api-integration.png',
    tags: ['.NET', 'REST APIs', 'Oracle', 'SQL Server', 'Integration']
  },
  {
    title: 'Database Reporting & Performance Optimization',
    description:
      'Worked on complex SQL Server and Oracle reporting logic, stored procedures, data extraction, and performance-focused query improvements for operational and management reporting.',
    image: '/assets/projects/project-02-database-reporting.png',
    tags: ['SQL Server', 'Oracle', 'Stored Procedures', 'Reporting', 'Performance']
  },
  {
    title: 'Internal Workflow & Dynamic Forms System',
    description:
      'Contributed to internal workflow and dynamic form solutions, including metadata-driven forms, validation rules, backend services, and user-focused operational screens.',
    image: '/assets/projects/project-03-workflow-forms.png',
    tags: ['.NET', 'Angular', 'TypeScript', 'APIs', 'System Analysis']
  },
  {
    title: 'Production Troubleshooting & Reliability',
    description:
      'Investigated and resolved production issues across APIs, database layers, scheduled jobs, logs, IIS-hosted applications, and integration flows.',
    image: '/assets/projects/project-04-production-support.png',
    tags: ['Troubleshooting', 'IIS', 'Logs', 'APIs', 'Reliability']
  }
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
  'System Analysis'
];

export const certifications: CertificationItem[] = [
  {
    title: 'Project Management Professional (PMP)',
    issuer: 'ACICIT / Egypt Post',
    date: 'February 2023',
    image: '/assets/certificates/certificate-01-project-management.jpg',
    category: 'Project Management'
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Forage / Tata',
    date: 'March 2023',
    image: '/assets/certificates/certificate-03-data-visualization.jpg',
    category: 'Data & Analytics'
  },
  {
    title: 'Digital Transformation',
    issuer: 'Egyptian Banking Institute / Central Bank of Egypt',
    date: 'June 2021',
    image: '/assets/certificates/certificate-02-digital-transformation.jpg',
    category: 'Digital Transformation'
  },
  {
    title: 'Advanced Excel',
    issuer: 'ACICT',
    date: 'April 2018',
    image: '/assets/certificates/certificate-advanced-excel.jpg',
    category: 'Data & Productivity'
  },
  {
    title: 'Financial Inclusion',
    issuer: 'Egyptian Banking Institute / Central Bank of Egypt',
    date: 'August 2021',
    image: '/assets/certificates/certificate-financial-inclusion.jpg',
    category: 'Financial Services'
  },
  {
    title: 'Effective Communication',
    issuer: 'ACICT',
    date: 'May 2017',
    image: '/assets/certificates/certificate-effective-communication.jpg',
    category: 'Communication'
  },
  {
    title: 'Positive Behaviors',
    issuer: 'Harvest Training and Education Center',
    date: 'January 2017',
    image: '/assets/certificates/certificate-positive-behaviors.jpg',
    category: 'Soft Skills'
  },
  {
    title: 'Integrated ISO 9001, ISO 14001 & OHSAS 18001 Internal Auditing',
    issuer: 'EMSI',
    date: 'April 2010',
    image: '/assets/certificates/certificate-04-quality-iso-internal-auditing.jpg',
    category: 'Quality & Auditing'
  },
  {
    title: 'Integrated System Management Awareness',
    issuer: 'EMSI',
    date: 'January 2010',
    image: '/assets/certificates/certificate-04-quality-iso-awareness.jpg',
    category: 'Quality & Management'
  }
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
    'Collaborate with business, support, and technical teams to deliver stable internal systems.'
  ]
};

export const contactLinks: ContactLink[] = [
  {
    label: 'LinkedIn',
    value: 'ashraf-farag-allah-90860019b',
    href: profile.linkedin
  },
  {
    label: 'GitHub',
    value: 'faragashraf',
    href: profile.github
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    label: 'Location',
    value: profile.location
  }
];
