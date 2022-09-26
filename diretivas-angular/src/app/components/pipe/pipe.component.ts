import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public name: string = '';
  public list: Array<{name: string}> = [];
  public date: Date = new Date;

  constructor() { }

  ngOnInit(): void { }

  public insert = () => {
    this.list.push({ name: this.name});
    this.name = '';
  }

  public delete = (event: number) => {
    this.list.splice(event, 1);
  }

}
