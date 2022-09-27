import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../home/model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: 'My first iten', checked: true},
    {task: 'My second iten', checked: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItenTaskList = (event: number) => {
    this.taskList.splice(event, 1);
  }

  public deleteAll = () => {
    const confirm = window.confirm('Do you want to delete all?')

    if (confirm == true) {
      this.taskList = [];
    }
  }
}
