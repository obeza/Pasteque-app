import { Component, OnInit } from '@angular/core';
import { RestService } from './../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers:[ RestService ]
})
export class LoginComponent implements OnInit {

  loginForm = {};
  impossible = false;

  constructor( private _rest:RestService, private _router:Router) { }

  ngOnInit() {
  }

  loginSubmit(){
    console.log(JSON.stringify(this.loginForm));
    this._rest.post('login', this.loginForm).then(
      (res)=>{ 
        console.log( JSON.stringify(res));
        let infos = res;
        if (!res){
          this.impossible = true;
        } else {
          console.log('login on....');
          localStorage.setItem('pastequeInfos', JSON.stringify(res) );

          this._router.navigate(['/accueil']);
        }
          
      }
    )
  }

}
