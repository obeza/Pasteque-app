import { Component, OnInit } from '@angular/core';
import { RestService } from './../services/rest.service';

@Component({
  selector: 'app-commerciaux',
  templateUrl: 'commerciaux.component.html',
  styleUrls: ['commerciaux.component.css'], 
  providers : [ RestService ]
})
export class CommerciauxComponent implements OnInit {

  commerciaux = [];

  constructor( private _restService:RestService) { }

  ngOnInit( ) {
    this.loadCommerciaux();
  }

  loadCommerciaux(){
    console.log('charge');
    this._restService.getList("utilisateur/list", null )
    .subscribe( 
      (res)=>{
        console.log( res );
        this.commerciaux = res;
      }
    )
  };

}
