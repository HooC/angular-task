import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  card;
  editor = false;
  formEditTask;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private service: TasksService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.service.getElement(this.activatedRoute.snapshot.params.id)
    .subscribe(response => this.card = response);

    this.formEditTask = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onBack() {
    this.route.navigate(['dashboard']);
  }

  showEditor(card) {
    this.card = card;
    this.editor = !this.editor;
    this.formEditTask.patchValue(card);
  }

  onUpdateTask (id, formEditTask) {
    this.service.updateTask(id, {
      title: formEditTask.value.title,
      description: formEditTask.value.description
    }).subscribe();

    this.showEditor(Object.assign(this.card, formEditTask.value));
  }

  changeStatus(e, id) {
    this.service.updateTask(id, {
      status: e.target.value
    }).subscribe();
  }
}
