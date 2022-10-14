import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css']
})
export class CardsComponentComponent implements OnInit {

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
