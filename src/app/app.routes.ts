import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { SunRise } from './sun-rise/sun-rise';
import { WeatherApp } from './weather-app/weather-app';

export const routes: Routes = [

    {path:"", component: HomePage},
    {path:"sunrise", component: SunRise},
    {path:"weather", component: WeatherApp}
];
