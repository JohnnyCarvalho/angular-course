import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  public condition: boolean = true;
  public heigthPx: string = '20px';
  public backgroundColor: string = 'blue';
  public colorText: string = 'white';

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if (this.condition) {
        this.condition = false;
        this.heigthPx = '40px';
        this.backgroundColor = 'red';
        this.colorText = 'black'
      } else {
        this.condition = true;
        this.heigthPx = '20px';
        this.backgroundColor = 'blue';
        this.colorText = 'white'
      }
    }, 2000);
  }

}
