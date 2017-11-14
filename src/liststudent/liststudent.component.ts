import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*componente para listar los alumnos*/

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListStudentComponent {

  private Url= '/api/students';
  private students:any=[{}];
  private student:any ={};
  private disabled=true;


  private showStudent(student){
    this.student=student;
  }

  private getStudents() {
    return this.http.get(`${this.Url}/students`)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.students=data;
        console.log(this.students);
      });
  }

}
