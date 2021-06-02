import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import * as Carousel from './carousel2.js';
import * as Beforeafter from './before&after.js'

@Component({
  selector: 'app-holidayinn',
  templateUrl: './holidayinn.component.html',
  styleUrls: ['./holidayinn.component.scss']
})
export class HolidayinnComponent implements OnInit {
  selectedLink: string = '';
  constructor() { }

  ngOnInit(): void {
    // shrink animation nav bar
      // carousel START
      $(".carousel").each(function(indexOfArray, element){
        new Carousel(element);
      });
      // carousel END


      // before after start
      Beforeafter();
     
      // before after end


  }
  @HostListener("window:scroll", [])
    onWindowScroll() {
      const el = document.scrollingElement || document.documentElement;
      // Useful for debugging. Helps the developer to figure out the right breakpoint for each of the parts of the top
      // navigation menu.
      console.log(el.scrollTop);
      const section1Offset: number = document.getElementById('section1')?.offsetTop ?? 0;
      const section2Offset: number = document.getElementById('section2')?.offsetTop ?? 0;
      const section3Offset: number = document.getElementById('section3')?.offsetTop ?? 0;
      const section4Offset: number = document.getElementById('section4')?.offsetTop ?? 0;
      const section5Offset: number = document.getElementById('section5')?.offsetTop ?? 0;
      
      if(el.scrollTop >= section4Offset - 100) {
        this.selectedLink = 'four';
      } else if (el.scrollTop >= section3Offset - 100) {
        this.selectedLink = 'three';
      } else if (el.scrollTop >= section2Offset - 100) {
        this.selectedLink = 'two';
      } else if (el.scrollTop >= section1Offset - 100){
        this.selectedLink = 'one'
      }else{
        this.selectedLink = '-'
      }
      $(function() {
        $(".sticky_active .circle").each(function() {
          $(this).css({'background-color': 'var(--color-secondary)'});
        });
        $(".sticky_active .progress_title").each(function() {
          $(this).css({'color':'var(--color-secondary)'});
        });
      });
      
      if ( el.scrollTop > 1300 ) {
        $(".progress_title").css({'font-size':'.8em', 'color':'#9fa6a9', 'font-weight':'500'});
        $(".circle").css({'width':'25px', 'height':'25px', 'border':'none', 'background-color':'#BBBBBB', 'color':'white', 'font-weight':'200', 'font-size':'0.8em'})
        $(".stiky_nav_title").css({'color':'rgba(60, 60, 60, 0)', 'font-size':'2em', 'font-weight':'500', 'letter-spacing':'0.5px', 'margin-bottom':'65px'}); 
      }
      else {
        $(".progress_title").css({'font-size':'.9em', 'color':'#515151', 'font-weight':'700'});
        $(".circle").css({'width':'45px', 'height':'45px','border':'2px solid #BBBBBB', 'background-color':'transparent', 'color':'#BBBBBB', 'font-weight':'700', 'font-size':'1.3em'})
        $(".stiky_nav_title").css({'color':'rgba(60, 60, 60, 1)', 'font-size':'2em', 'font-weight':'500', 'letter-spacing':'0.5px', 'margin-bottom':'65px'});
      }

      if(el.scrollTop > section5Offset){
        $(".sticky_nav").css({'visibility': 'hidden'});
      }
      else{
        $(".sticky_nav").css({'visibility': 'visible'});
      }
    }
    markSelected(selectedLink: string) {
      this.selectedLink = selectedLink;
    }

  ngAfterViewInit(): void{

  }


}
