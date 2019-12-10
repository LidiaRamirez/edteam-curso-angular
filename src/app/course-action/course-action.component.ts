import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'ed-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input()
  curso: Curso;
  constructor() { }

  ngOnInit() {
  }

  editCourse(curso: Curso) {
    console.log('Edit', curso); 
    // Propagando el objeto Curso hacia el componente Padre
    this.edit.emit(curso)
  }

  deleteCourse(curso: Curso) {
    console.log('Delete', curso);
    this.delete.emit(curso)
  }

  @Output()
  edit: EventEmitter<Curso> = new EventEmitter<Curso>();

  @Output()
  delete : EventEmitter<Curso> = new EventEmitter<Curso>();

}
