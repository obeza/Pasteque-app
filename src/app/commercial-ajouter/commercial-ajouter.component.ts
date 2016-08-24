import { Component, OnInit } from '@angular/core';
import { RestService } from './../services/rest.service';

import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-commercial-ajouter',
  templateUrl: 'commercial-ajouter.component.html',
  styleUrls: ['commercial-ajouter.component.css'],
  providers: [ RestService, NotificationsService ]
})
export class CommercialAjouterComponent implements OnInit {

  dataForm = {
    nom:null,
    prenom:null,
    email:null,
    passe:null,
    statut:"commercial"
  };


  constructor( 
    private _rest:RestService, 
    private _notificationsService: NotificationsService
  ) { 

    this.dataForm['statut'] = "commercial";
  
  }

  ngOnInit() {
    
  }

  formSubmit(){
    this._notificationsService.success("Succes", "Commercial ajouté...");

    //console.log(JSON.stringify(this.dataForm));
    //this._notifService.html( this._notifOptions.options.htmlSauvegarde , "hello", {timeOut:0});
    //this._notifOptions.notif("message ok");
     //this._notifOptions.notif(100);
    /*
    
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

    */
      
      

  }

}
