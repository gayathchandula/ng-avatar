import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAvatarCreatorModule } from 'ng-avatar-creator';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAvatarCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
