import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name: string = "Nguyen Van A";
  age: number = 25;
}
