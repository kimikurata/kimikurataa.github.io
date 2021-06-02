import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import * as AOS from 'aos';
import * as Typetext from './typewriter-text.js';

import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    AOS.init({});
    Typetext();
  }
}
