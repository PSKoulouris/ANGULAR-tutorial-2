import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-app',
  imports: [],
  templateUrl: './weather-app.html',
  styleUrl: './weather-app.css'
})
export class WeatherApp {

   private apiURL = 'http://api.weatherbit.io/v2.0/current?key=2f4136909c36458fbe2557da6f1caa64&city=Luxembourg'

  description:string ='';
  temp:number = 0;
  origin:string = "";
  logo:string = "";

  // j'install le téléphone chez moi
  constructor(private http:HttpClient){}

  // fonction appel vers API
  getSunData(){
    this.http.get(this.apiURL).subscribe({
      next:(data:any) =>{
        this.description = data['data'][0]['weather']["description"]
        this.temp = data["data"][0]["temp"]
        this.origin = data["data"][0]["sources"][2]
        this.logo = data["data"][0]["weather"]["icon"]
      }
    })
  }

  // Lancer la function dans j'ouvre le composant
  ngOnInit(){
    this.getSunData();
  }

}
