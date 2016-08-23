import { Component, OnInit } from '@angular/core';
import { RestService } from './../services/rest.service';
import {NotificationsService, SimpleNotificationsComponent} from "angular2-notifications"
import { NotifOptionsService } from './../services/notif-options.service';

@Component({
  selector: 'app-commercial-ajouter',
  templateUrl: 'commercial-ajouter.component.html',
  styleUrls: ['commercial-ajouter.component.css'],
  providers: [ RestService, NotificationsService, NotifOptionsService ]
})
export class CommercialAjouterComponent implements OnInit {

  dataForm = {};

  notifOptions = {};

  constructor( 
    private _rest:RestService, 
    private _notifService: NotificationsService,
    private _notifOptions: NotifOptionsService
  ) { 

    this.dataForm['statut'] = "commercial";
    

  }

  ngOnInit() {
    this.notifOptions = this._notifOptions.options.options;
    
  }

  formSubmit(){
    console.log(JSON.stringify(this.dataForm));
    this._notifService.html( this._notifOptions.options.htmlSauvegarde , "hello", {timeOut:0});

    
    this._rest.post('utilisateur', this.dataForm).then(
      (res)=>{ 
        console.log( res );
        if ( res.code=="ok"){
          this.dataForm = {};
          this._notifService.remove();
          this._notifService.success("Succes", "Commercial ajouté...");
        }
        if ( res.code=="double"){
          this._notifService.remove();
          this._notifService.error("Erreur", "ce mail existe déjà...");
        }      
      });
      
      

  }

}
