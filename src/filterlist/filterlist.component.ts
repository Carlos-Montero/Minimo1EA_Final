import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterListComponent {

  getSubjectsName() {
    this.http.get('http://localhost:3000/api/subjects/:name').map((res: Response) => res.json()).subscribe(data => {
      this.subjects = data;
    });
  }
  getSubjectsStudies() {
    this.http.get('http://localhost:3000/api/subjects/:studies').map((res: Response) => res.json()).subscribe(data => {
      this.subjects = data;
    });
  }
  getSubjectsQuadrimestre() {
    this.http.get('http://localhost:3000/api/subjects/:quadrimestre').map((res: Response) => res.json()).subscribe(data => {
      this.subjects = data;
    });
  }
  
}
