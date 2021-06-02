import { Component, OnInit, Input } from '@angular/core';
import {ProjectItems} from '../data/project-list';


@Component({
  selector: 'app-project-thumbs',
  templateUrl: './project-thumbs.component.html',
  styleUrls: ['./project-thumbs.component.scss']
})
export class ProjectThumbsComponent implements OnInit {
  
  // title: string[] = ['Adding value to math and science learning experience.']; 
  // thumbnail: string[] = ['nspire-thumbnail'];

  projectitem: Array<any> = ProjectItems;
  @Input() excludedItems: number = -1;
  constructor() { 
  }

  ngOnInit(): void {
    if(this.excludedItems > -1) {
      this.projectitem = this.projectitem.filter(item => item["id"] != this.excludedItems);
    }
  }

}
