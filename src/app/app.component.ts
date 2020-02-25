import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project2';
  isLoading = true;
  todoList: number[] = [];
  email: string;
  imageUrl = 'https://placeimg.com/640/480/any';
  amount = 123456.7890;
  today = new Date();
  user = {
    name: 'John snow',
    age: 20,
    isAdmin: false
  };
  // class binding
  isActive = true;
  constructor(
    private todoService: TodoService
  ) {
    this.todoList = this.todoService.getTodoList();
  }

  onClickOkButton(event) {
    console.log(event);
  }

  search(email: string) {
    console.log('search!', email);
  }
}
