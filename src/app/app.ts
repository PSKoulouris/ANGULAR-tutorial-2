import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SunRise } from './sun-rise/sun-rise';
import { WeatherApp } from './weather-app/weather-app';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SunRise, WeatherApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'My New Angular Project';
}
