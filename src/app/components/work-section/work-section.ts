import { Component } from '@angular/core';

import { caseStudies, type IntegrationContext } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

const tagLogos: Record<string, string> = {
  '.NET': 'assets/logos/dotnet.svg',
  'C#': 'assets/logos/csharp.svg',
  'REST APIs': 'assets/logos/rest-api.svg',
  Oracle: 'assets/logos/oracle.svg',
  'SQL Server': 'assets/logos/sql-server.svg',
  Hangfire: 'assets/logos/hangfire.svg',
  NuGet: 'assets/logos/nuget.svg',
  'Excel Reports': 'assets/logos/excel.svg',
  Reporting: 'assets/logos/excel.svg',
  Integration: 'assets/logos/rest-api.svg',
  APIs: 'assets/logos/rest-api.svg',
  'Background Jobs': 'assets/logos/hangfire.svg',
  'Mail Queue': 'assets/logos/hangfire.svg',
  'Reusable Libraries': 'assets/logos/nuget.svg',
  'Internal Tools': 'assets/logos/analysis.svg',
  'Clean Code': 'assets/logos/dotnet.svg',
  'Government APIs': 'assets/logos/rest-api.svg',
  'Queue retry': 'assets/logos/hangfire.svg',
  'Audit-safe': 'assets/logos/analysis.svg',
  'Service routing': 'assets/logos/rest-api.svg',
  Validation: 'assets/logos/analysis.svg',
  Receipts: 'assets/logos/excel.svg',
  'Retry policy': 'assets/logos/hangfire.svg',
  Monitoring: 'assets/logos/performance.svg',
  '.NET libraries': 'assets/logos/dotnet.svg',
  Standards: 'assets/logos/analysis.svg',
  Excel: 'assets/logos/excel.svg',
  'Scheduled jobs': 'assets/logos/hangfire.svg',
};

@Component({
  selector: 'app-work-section',
  imports: [SectionHeading],
  templateUrl: './work-section.html',
})
export class WorkSection {
  protected readonly caseStudies = caseStudies;
  private readonly missingLogos = new Set<string>();

  protected markLogoMissing(logo?: string): void {
    if (!logo) {
      return;
    }

    this.missingLogos.add(logo);
  }

  protected isLogoMissing(logo?: string): boolean {
    if (!logo) {
      return true;
    }

    return this.missingLogos.has(logo);
  }

  protected isWordmarkLogo(context: IntegrationContext): boolean {
    return context.logoMode === 'wordmark';
  }

  protected getTagLogo(tag: string): string | undefined {
    return tagLogos[tag];
  }
}
