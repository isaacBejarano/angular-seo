import { Component, OnInit } from '@angular/core';

import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private canonical: CanonicalService) {}

  ngOnInit(): void {
    this.canonical.updateCanonicalUrl('/');
  }
}
