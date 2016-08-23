import { Injectable } from '@angular/core';

@Injectable()
export class NotifOptionsService {

   public options = {
     htmlSauvegarde : '<div class="hello">Sauvegarde en cours...</div>',
     options:
     {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: "visible",
        rtl: false,
        animate: "scale",
        position: ["right", "top"]
    }};
  
    

  constructor() { }



}
