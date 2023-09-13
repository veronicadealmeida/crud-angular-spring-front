import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '../../../assets/courses.json';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Course[]>(this.API)
      .pipe(tap((courses) => console.log(courses)));
  }
}
