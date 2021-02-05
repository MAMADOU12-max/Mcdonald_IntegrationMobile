import {Component, Input, OnInit} from '@angular/core';
import {EatModel} from "../../../model/eat-model";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() cards:EatModel[] = [] ;
  constructor() { }

  ngOnInit(): void {
  }

}
