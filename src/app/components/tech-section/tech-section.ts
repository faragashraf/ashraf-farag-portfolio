import { Component } from '@angular/core';

import { techStack } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

const techLogos: Record<string, string> = {
  '.NET': 'assets/logos/dotnet.svg',
  'C#': 'assets/logos/csharp.svg',
  'ASP.NET Core': 'assets/logos/dotnet.svg',
  'REST APIs': 'assets/logos/rest-api.svg',
  'SQL Server': 'assets/logos/sql-server.svg',
  Oracle: 'assets/logos/oracle.svg',
  Angular: 'assets/logos/angular.svg',
  TypeScript: 'assets/logos/typescript.svg',
  JavaScript: 'assets/logos/javascript.svg',
  HTML: 'assets/logos/html5.svg',
  CSS: 'assets/logos/css.svg',
  IIS: 'assets/logos/iis.svg',
  Git: 'assets/logos/git.svg',
  Postman: 'assets/logos/postman.svg',
  'Performance Optimization': 'assets/logos/performance.svg',
  'System Analysis': 'assets/logos/analysis.svg',
};

@Component({
  selector: 'app-tech-section',
  imports: [SectionHeading],
  templateUrl: './tech-section.html',
})
export class TechSection {
  protected readonly techStack = techStack.map((label) => ({
    label,
    logo: techLogos[label],
  }));
}
