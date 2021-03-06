import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Todo from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  uri = 'http://localhost:9090/oac/todos/';

  constructor(private http: HttpClient) { }

  getTodo(id:number) {
    this.http.get(this.uri+id).subscribe(
      res => { console.log(res); },
      err => {
        console.log("error");
        console.log(err);
      }
    );
  }

  getAllTodos() {
    console.log("Getting all Todos");
    this.http.get(this.uri).subscribe(
      res => { console.log(res); },
      err => {
        console.log("error");
        console.log(err);
      }
    );
  }

  getAllFilteredTodos() {
    console.log("Getting all filtered Todos");
    this.http.get('http://localhost:9090/oac/todos2/').subscribe(
      res => { console.log(res); },
      err => {
        console.log("error");
        console.log(err);
      }
    );
  }

  saveTodo(todo:Todo){
    console.log("Create Todo");
    this.http.post(this.uri, todo).subscribe(
      res => { console.log(res); },
      err => {
        console.log("error");
        console.log(err);
      }
    );
  }
}
