import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseViewfunService {

  constructor(private http:HttpClient) { }
 Addcourse(course:any){
  return this.http.post<any>("https://mylinkurcodesapp.herokuapp.com/addcourse",course);
 }
  viewCourse=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses");
  }
}
