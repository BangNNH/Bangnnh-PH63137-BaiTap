import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: "One Piece",
      author: "Oda",
      views: 100000,
      year: 1997,
      category: "Phiêu lưu",
      image: "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
    },
    {
      title: "Naruto",
      author: "Kishimoto",
      views: 90000,
      year: 1999,
      category: "Hành động",
      image: "https://cdn.myanimelist.net/images/manga/3/117681.jpg",
    },
    {
      title: "Doraemon",
      author: "Fujiko F. Fujio",
      views: 70000,
      year: 1969,
      category: "Thiếu nhi",
      image: "https://cdn.myanimelist.net/images/manga/1/181546.jpg",
    },
    {
      title: "Dragon Ball",
      author: "Akira Toriyama",
      views: 95000,
      year: 1984,
      category: "Hành động",
      image: "https://cdn.myanimelist.net/images/manga/1/113747.jpg",
    },
    {
      title: "Attack On Titan",
      author: "Hajime Isayama",
      views: 85000,
      year: 2009,
      category: "Dark Fantasy",
      image: "https://cdn.myanimelist.net/images/manga/2/37846.jpg",
    },
    {
      title: "Bleach",
      author: "Tite Kubo",
      views: 70000,
      year: 2001,
      category: "Shounen",
      image: "https://cdn.myanimelist.net/images/manga/3/179882.jpg",
    },
  ];
}
