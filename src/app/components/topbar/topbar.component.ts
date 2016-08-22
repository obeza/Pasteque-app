import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'comp-topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.css'],
  providers:[ LoginService ]
})
export class TopbarComponent implements OnInit {

  constructor( private _loginService:LoginService) { }

  ngOnInit() {
  }

  deconnexion(){
    this._loginService.deconnexion();
  }

}
