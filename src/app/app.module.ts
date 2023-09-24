import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './dynamic_parts/welcome/welcome.component';
import { AboutmeComponent } from './static_parts/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
