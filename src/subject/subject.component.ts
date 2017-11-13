/*
import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  title = 'app';
  subject = {};
  subjects = [];
/*
  constructor(private http: Http) {
    this.subject = {
      'name': '',
      'studies': '',
      'quadrimestre': '',
      'students': ''
    };
    this.getSubjects();
  }
/*
  getSubjects() {
    this.http.get('http://localhost:3000/api/subjects/').map((res: Response) => res.json()).subscribe(data => {
      this.subjects = data;
    });
  }

  onSubmit() {
    console.log("submit");
    this.http.post('http://localhost:3000/api/subjects/', this.subjects).subscribe();

  }
  */


