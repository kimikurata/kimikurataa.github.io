import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
// import * as Menu from './navbar_test.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { 
    window.onscroll = () => { this.myFunction(); };
  }

  ngOnInit(): void {
    // Menu(jQuery, window, document);
  }


 myFunction() {
   console.log('CALLED');
  // const navbar: HTMLElement|null = document.getElementById("navbar");
  // const sticky: number = navbar?.offsetTop ?? 0;
  // if (sticky &&  window.pageYOffset >= sticky) {
  //   debugger;
  //   console.log('a');
  //   navbar?.classList.add("sticky")
  // } else {
  //   debugger;
  //   console.log('b');
  //   navbar?.classList.remove("sticky");
  // }
}
}
