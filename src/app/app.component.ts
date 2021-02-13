import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    //
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        // rxjs filter() + NavigationEnd ~ navigation went OK
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        let aR = this.getChild(this.activatedRoute);
        // NOTE: og: is open graph (Facebook API)

        // FIXME: switch
        aR.data.subscribe((data) => {

          /* TITLE */
          this.title.setTitle(data.title);

          /* METAS */

          // description
          if (data.description) {
            this.meta.updateTag({
              name: 'description',
              content: data.description,
            });
          } else {
            this.meta.removeTag("name='description'");
          }

          // robots
          if (data.robots) {
            this.meta.updateTag({
              name: 'robots',
              content: data.robots,
            });
          } else {
            this.meta.updateTag({
              name: 'robots',
              content: 'follow,index',
            });
          }

          // og:url
          if (data.ogUrl) {
            this.meta.updateTag({
              property: 'og:url',
              content: data.ogUrl,
            });
          } else {
            this.meta.updateTag({
              property: 'og:url',
              content: this.router.url,
            });
          }

          // og:title
          if (data.ogTitle) {
            this.meta.updateTag({
              property: 'og:title',
              content: data.ogTitle,
            });
          } else {
            this.meta.removeTag("property='og:title'");
          }

          // og:description
          if (data.ogDescription) {
            this.meta.updateTag({
              property: 'og:description',
              content: data.ogDescription,
            });
          } else {
            this.meta.removeTag("property='og:description'");
          }

          // og:image
          if (data.ogImage) {
            this.meta.updateTag({
              property: 'og:image',
              content: data.ogImage,
            });
          } else {
            this.meta.removeTag("property='og:image'");
          }
        });
      });
  }

  getChild(aR: ActivatedRoute): ActivatedRoute {
    if (aR.firstChild) return this.getChild(aR.firstChild);
    else return aR;
  }
}
