import {Component, Input, OnInit} from '@angular/core';
import {EatModel} from "../../model/eat-model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() cards: EatModel[] = []
  constructor() { }

  ngOnInit(): void {
    // console.log(this.cards);
  }

}
