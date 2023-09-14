import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input()
  courses: Course[] = [];
  @Output() add = new EventEmitter();

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {}
  ngOnInit(): void {}

  onAdd() {
    this.add.emit(true);
  }
}
