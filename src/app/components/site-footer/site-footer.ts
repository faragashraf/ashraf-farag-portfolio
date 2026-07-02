import { Component } from '@angular/core';

import { profile } from '../../data/portfolio';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html'
})
export class SiteFooter {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
}
