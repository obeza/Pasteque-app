import { Component, OnInit, EventEmitter } from '@angular/core';




@Component({
  selector: 'comp-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
  providers: [ ]
})
export class ContentComponent implements OnInit {

    public notifOptions = 
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
    };

  isLoading:any;

  constructor(  
  ) {
  }

  ngOnInit() {

  }



}
