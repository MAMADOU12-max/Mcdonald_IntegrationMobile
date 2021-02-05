import {Component, Input, OnInit} from '@angular/core';
import {EatModel} from "../../model/eat-model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() cards: EatModel[] = []

  constructor() { }

  ngOnInit(): void {

  }

}
