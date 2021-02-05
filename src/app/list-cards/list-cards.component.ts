import { Component, OnInit } from '@angular/core';
import * as menu from '../../../menu.json';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  //recup a data from json file
  listMenu: any = (menu as any).default;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.listMenu);
  }

}
