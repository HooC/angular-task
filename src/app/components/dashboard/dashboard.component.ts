import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks;

  constructor(private tasksService: TasksService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getAllTasks().subscribe(response => this.tasks = response);
  }

  getTasksCategory (status: string) {
    if (this.tasks) {
      return this.tasks.filter( item => item.status === status);
    }
  }

  updateTasks (item) {
    this.tasks = this.tasks.filter(i => i !== item);
  }
}
