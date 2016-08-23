import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http'; 

// Material 
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdMenuModule } from '@angular2-material/menu';
import { MdIconModule } from '@angular2-material/icon';
import { MdRadioModule } from '@angular2-material/radio';

// autres components
import { SimpleNotificationsModule } from 'angular2-notifications';

// mes pages
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RestService } from './services/rest.service';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CommerciauxComponent } from './commerciaux/commerciaux.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { Content } from './directives/content.directive';
import { CommercialAjouterComponent } from './commercial-ajouter/commercial-ajouter.component';
import { NotifOptionsService } from './services/notif-options.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    TopbarComponent,
    CommerciauxComponent,
    SidenavComponent,
    ContentComponent,
    Content,
    CommercialAjouterComponent
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
    MdInputModule,
    HttpModule,
    MdMenuModule,
    MdIconModule,
    MdRadioModule,
    SimpleNotificationsModule
  ],
  providers: [ RestService, NotifOptionsService ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
