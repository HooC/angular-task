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
  tags: String[] = [];
  editor = false;
  formEditTask;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private service: TasksService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.service.getElement(this.activatedRoute.snapshot.params.id)
    .subscribe(response => {
      this.card = response;
      this.tags = [].concat(response['tags']);
    });

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

  cancelEditor(e) {
    e.preventDefault();
    this.editor = !this.editor;
  }

  onUpdateTask (id, formEditTask) {
    this.service.updateTask(id, {
      title: formEditTask.value.title,
      tags: this.tags,
      description: formEditTask.value.description
    }).subscribe(response => this.card = response );

    this.showEditor(Object.assign(this.card, formEditTask.value));
  }

  changeStatus(e, id) {
    this.service.updateTask(id, {
      status: e.target.value
    }).subscribe();
  }

  onChange(newTags) {
    if  (Array.isArray(newTags)) {
      this.tags = newTags;
    }

    console.log(this.tags, this.card.tags);
  }
}
