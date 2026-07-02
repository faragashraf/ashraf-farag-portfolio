import { Component } from '@angular/core';

import { profile } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-personal-info-section',
  imports: [SectionHeading],
  templateUrl: './personal-info-section.html',
})
export class PersonalInfoSection {
  protected readonly profile = profile;
}
