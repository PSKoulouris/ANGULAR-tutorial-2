import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SunRise } from './sun-rise/sun-rise';
import { WeatherApp } from './weather-app/weather-app';
import { HomePage } from './home-page/home-page';
import { NavBar } from './nav-bar/nav-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'My New Angular Project';
}
