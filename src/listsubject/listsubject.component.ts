import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*componente para listar las asignaturas*/

@Component({
  selector: 'app-listsubject',
  templateUrl: './listsubject.component.html',
  styleUrls: ['./listsubject.component.css']
})
export class ListSubjectComponent {

  private Url= '/api/subjects';
  private subjects:any=[{}];
  private subject:any ={};
  private students:any=[{}];;
  private disabled=true;

  private showSubjects(subject){
    this.subject=subject;
  }

  private getSubject() {
    return this.http.get(`${this.Url}/subjects`)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.subjects=data;
        console.log(this.subjects);
      });
  }

}

