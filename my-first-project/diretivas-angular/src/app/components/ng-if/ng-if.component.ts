import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public condition: boolean = true;
  public click: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true;
      }
    }, 1000)
  }

  public onClick = () => {
    if (this.click) {
      this.click = false;
    } else {
      this.click = true 
    }
  }

}
