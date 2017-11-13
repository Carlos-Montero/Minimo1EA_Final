import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  getSubjects() {
    this.http.get('http://localhost:3000/api/subjects/').map((res: Response) => res.json()).subscribe(data => {
      this.subjects = data;
    });
  }
  onSubmit() {
    console.log("doing get");
    this.http.get('http://localhost:3000/api/subjects/').subscribe();

  }
}

