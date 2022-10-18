import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  public sum(n1: number, n2: number): Number{

    const sum = (n1 + n2)

    return sum

  }

}
