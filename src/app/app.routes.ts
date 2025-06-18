import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { SunRise } from './sun-rise/sun-rise';
import { WeatherApp } from './weather-app/weather-app';
import { ForecastPage } from './forecast-page/forecast-page';
import { CommentsPage } from './comments-page/comments-page';
import { RoomsPage } from './rooms-page/rooms-page';

export const routes: Routes = [

    {path:"", component: HomePage},
    {path:"sunrise", component: SunRise},
    {path:"weather", component: WeatherApp},
    {path:"forecast", component: ForecastPage},
    {path:"comments", component: CommentsPage},
    {path:"rooms", component: RoomsPage}
];
