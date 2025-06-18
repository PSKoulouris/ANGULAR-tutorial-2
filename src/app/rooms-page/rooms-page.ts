import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms-page',
  imports: [FormsModule],
  templateUrl: './rooms-page.html',
  styleUrl: './rooms-page.css'
})
export class RoomsPage {
  APIUrl= 'https://chat-api-course.onrender.com/rooms'
  roomsList=[]
  roomValue=''
  constructor(private http:HttpClient){}
  getRoomAPI(){
    this.http.get(this.APIUrl).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.roomsList = res['data']
      }
    })
  }
  ngOnInit(){
    this.getRoomAPI();
    // setInterval(()=>this.getRoomAPI(), 1000)
  } 
  postRoomAPI(){
    this.http.post(this.APIUrl,{
      roomName:this.roomValue
    }).subscribe({
      next:()=>{
        console.log('ca sest bien passé')
        this.roomValue= ""
        this.getRoomAPI()
      }
    })
  }
}

