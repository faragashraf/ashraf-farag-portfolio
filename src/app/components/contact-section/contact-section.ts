import { Component } from '@angular/core';

import { contactLinks, profile } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-contact-section',
  imports: [SectionHeading],
  templateUrl: './contact-section.html'
})
export class ContactSection {
  protected readonly contactLinks = contactLinks;
  protected readonly profile = profile;
}
