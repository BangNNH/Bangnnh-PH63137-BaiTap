import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'my-app';
  name = 'Hoài Băng';
  age = 20;

  sayHello() {
    alert("Hello world")
  }
}
