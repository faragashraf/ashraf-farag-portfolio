import { Component } from '@angular/core';

import { certifications } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-certifications-section',
  imports: [SectionHeading],
  templateUrl: './certifications-section.html'
})
export class CertificationsSection {
  protected readonly certifications = certifications;
}
