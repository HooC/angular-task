import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tagsColl: String[] = [];

  constructor() { }

  @Input() tags;

  @Output() change = new EventEmitter <String[]> ();

  ngOnInit() {
    this.tagsColl = this.tags;
  }

  onRemoveTag(e, tag) {
    e.preventDefault();
    this.tagsColl = this.tagsColl.filter(el => el !== tag);
    this.change.emit(this.tagsColl);
  }

  onAddNewTag(input) {
    if (!this.tagsColl.includes(input.value)) {
      this.tagsColl.push(input.value);
    }
    input.value = '';
    this.change.emit(this.tagsColl);
  }
}
