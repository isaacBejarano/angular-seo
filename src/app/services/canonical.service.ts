import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanonicalService {
  domain = 'https://localhost';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  ngOnInit(): void {
    this.updateCanonicalUrl(this.router.url);
    console.log(this.router.url);
  }

  updateCanonicalUrl(urn: string) {
    const head: HTMLHeadElement = this.dom.getElementsByTagName('head')[0];

    let link: HTMLLinkElement | null = this.dom.querySelector(
      `link[rel='canonical']`
    );

    if (link == null) {
      link = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(link);
    }

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', this.domain + urn);
  }
}
