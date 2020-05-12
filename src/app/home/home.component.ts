import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  taskName = '';
  taskList = [];

  constructor() { }

  ngOnInit(): void {
    this.itemCount = this.taskList.length;
  }

  addTask() {
    this.taskList.push(this.taskName);
    this.taskName = '';
    this.itemCount = this.taskList.length;
  }

  removeTask(ti: number) {
    this.taskList.splice(ti, 1);
    this.itemCount = this.taskList.length;
  }

}
