import { Component, OnInit } from '@angular/core';
import { RestService } from './../services/rest.service';

@Component({
  selector: 'app-commercial-ajouter',
  templateUrl: 'commercial-ajouter.component.html',
  styleUrls: ['commercial-ajouter.component.css'],
  providers: [ RestService ]
})
export class CommercialAjouterComponent implements OnInit {

  dataForm = {};
  
  constructor( private _rest:RestService) { 

    this.dataForm['statut'] = "commercial";

  }

  ngOnInit() {
    
  }

  formSubmit(){
    console.log(JSON.stringify(this.dataForm));
    this._rest.post('utilisateur', this.dataForm).then(
      (res)=>{ 
        console.log( res );
        if ( res.code=="ok"){
          this.dataForm = {};
          
        }       
      })
  }

}
