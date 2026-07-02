import { Component } from '@angular/core';

import { profile } from '../../data/portfolio';

@Component({
  selector: 'app-site-header',
  imports: [],
  templateUrl: './site-header.html'
})
export class SiteHeader {
  protected readonly profile = profile;
}
