import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [NgClass],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
    studentsList = [
      {name:"Philippe", score:11},
      {name:"Marek", score:22}
    ]

}
