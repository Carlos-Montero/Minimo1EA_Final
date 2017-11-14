import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
/*componente para añadir alumnos*/
@Component({
  selector: 'app-student',
  templateUrl: './students/app.component.html',
  styleUrls: ['./students/app.component.css']
})
export class AppComponent {
  title = 'app';
  student = {};
  students = [];
  //subject = {};
  //subjects = [];

  constructor(private http: Http) {
    this.student = {
      'name': '',
      'address': '',
      'phone': ''
    };
    this.getStudents();
  }

  getStudents() {
    this.http.get('http://localhost:3000/api/students/').map((res: Response) => res.json()).subscribe(data => {
      this.students = data;
    });
  }

  onSubmit() {
    console.log("submit");
    this.http.post('http://localhost:3000/api/students/', this.student).subscribe();

  }


}
