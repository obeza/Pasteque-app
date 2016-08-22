import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommerciauxComponent } from './commerciaux/commerciaux.component';
import { CommercialAjouterComponent} from './commercial-ajouter/commercial-ajouter.component';

const appRoutes :  Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'commerciaux', component: CommerciauxComponent },
    { path: 'commerciaux/ajouter', component: CommercialAjouterComponent }
];

//export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes );