export interface ExpertiseItem {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  tags: string[];
}

export interface CertificationItem {
  title: string;
  note: string;
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
  email: 'your-email@example.com'
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
      'Designed and supported backend APIs and data integration flows for enterprise and government-related systems, focusing on reliability, validation, and operational accuracy.',
    tags: ['.NET', 'REST APIs', 'Oracle', 'SQL Server', 'Integration']
  },
  {
    title: 'Database Reporting & Performance Optimization',
    description:
      'Worked on complex SQL Server and Oracle reporting logic, stored procedures, data extraction, and performance-focused query improvements for operational and management reporting.',
    tags: ['SQL Server', 'Oracle', 'Stored Procedures', 'Reporting', 'Performance']
  },
  {
    title: 'Internal Workflow & Dynamic Forms Systems',
    description:
      'Contributed to internal workflow and dynamic form solutions, including metadata-driven forms, validation rules, backend services, and user-focused operational screens.',
    tags: ['.NET', 'Angular', 'TypeScript', 'APIs', 'System Analysis']
  },
  {
    title: 'Production Troubleshooting & Reliability',
    description:
      'Investigated and resolved production issues across APIs, database layers, scheduled jobs, logs, IIS-hosted applications, and integration flows.',
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
    title: 'Project Management / PMP Knowledge',
    note: 'TODO: add exact certificate name, issuer, and date.'
  },
  {
    title: 'Digital Transformation',
    note: 'TODO: add exact certificate name, issuer, and date.'
  },
  {
    title: 'Data Visualization',
    note: 'TODO: add exact certificate name, issuer, and date.'
  },
  {
    title: 'Quality Management / ISO Awareness',
    note: 'TODO: add exact certificate name, issuer, and date.'
  },
  {
    title: 'Advanced Excel',
    note: 'TODO: add exact certificate name, issuer, and date.'
  },
  {
    title: 'Effective Communication',
    note: 'TODO: add exact certificate name, issuer, and date.'
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
