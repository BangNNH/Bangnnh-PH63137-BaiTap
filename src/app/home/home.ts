import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
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
