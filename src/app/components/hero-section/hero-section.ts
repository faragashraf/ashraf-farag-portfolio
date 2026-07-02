import { Component } from '@angular/core';

import { profile, techStack } from '../../data/portfolio';

const skillLogos: Record<string, string> = {
  '.NET': 'assets/logos/dotnet.svg',
  'C#': 'assets/logos/csharp.svg',
  'ASP.NET Core': 'assets/logos/dotnet.svg',
  'REST APIs': 'assets/logos/rest-api.svg',
  'SQL Server': 'assets/logos/sql-server.svg',
  Oracle: 'assets/logos/oracle.svg',
};

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  protected readonly profile = profile;
  protected readonly keySkills = techStack.slice(0, 6).map((label) => ({
    label,
    logo: skillLogos[label],
  }));
}
