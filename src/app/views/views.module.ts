import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, PolicyComponent],
  imports: [CommonModule],
  exports: [HomeComponent, AboutComponent],
})
export class ViewsModule {}
