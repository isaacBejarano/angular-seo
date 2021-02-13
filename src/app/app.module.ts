import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewsModule } from './views/views.module';

import { CanonicalService } from './services/canonical.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ViewsModule],
  providers: [Meta, Title, CanonicalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
