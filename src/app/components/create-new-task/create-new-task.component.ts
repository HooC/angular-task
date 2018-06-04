import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.scss']
})
export class CreateNewTaskComponent implements OnInit {

  data = {};
  idNewCard: string;
  formNewTask: FormGroup;

  constructor( private service: TasksService,
               private fb: FormBuilder,
               private router: Router) {

    this.formNewTask = fb.group({
      'title': ['', [Validators.required]],
      'description': ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  onSendForm () {
    this.service.createNewTask({
      title: this.formNewTask.value.title,
      description: this.formNewTask.value.description,
      status: 'new'
    }).subscribe(response => {
      this.router.navigate(['']);
    });
  }
}
