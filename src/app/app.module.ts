import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

// Material 
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';

// mes pages
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdInputModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
