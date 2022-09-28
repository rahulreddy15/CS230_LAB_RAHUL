import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() img: string;
  @Input() name: string;
  @Input() message: string;

  constructor() { 
    this.img = "";
    this.name = "missing title";
    this.message= "missing description";
  }

  ngOnInit(): void {
  }

}
