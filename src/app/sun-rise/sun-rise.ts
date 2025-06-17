import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-sun-rise',
  imports: [],
  templateUrl: './sun-rise.html',
  styleUrl: './sun-rise.css'
})
export class SunRise {
  private apiURL = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400'
  heureDeLever:string ='';

  // j'install le téléphone chez moi
  constructor(private http:HttpClient){}

  // fonction appel vers API
  getSunData(){
    this.http.get(this.apiURL).subscribe({
      next:(data:any) =>{
        this.heureDeLever = data['results']['sunrise']
      }
    })
  }

  // Lancer la function dans j'ouvre le composant
  ngOnInit(){
    this.getSunData();
  }
}

