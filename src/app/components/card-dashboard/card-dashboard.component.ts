import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})

export class CardDashboardComponent implements OnInit {

  @Input() cards;

  constructor(private service: TasksService,
              private dash: DashboardComponent) { }

  ngOnInit() {
  }

  update() {
    this.service.getAllTasks().subscribe();
  }

  deleteTask(item) {
    this.dash.updateTasks(item);
    this.service.deleteTask(item.id).subscribe();
  }
}
