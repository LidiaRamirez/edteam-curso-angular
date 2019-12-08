import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = 'Lista de cursos';
  imageUrl: string = 'assets/images/angular.png';
  anchoImagen: string = "40px";

  courses: any[] = [
    {
      id: 1,
      name: 'Angular',
      dateStart: '20 sept 2019',
      description: 'Angular desde Cero',
      price: 29.999,
      rating: 4.5,
      imgUrl: ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  editCourse(course: any) {
    console.log(course)
  }

  deleteCourse(course: any) {
    console.log(course)
  }

}
