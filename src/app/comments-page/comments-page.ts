import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments-page',
  imports: [FormsModule],
  templateUrl: './comments-page.html',
  styleUrl: './comments-page.css'
})
export class CommentsPage {

  private apiURL = 'https://simple-comments-api.onrender.com/comments'

  commentsList = []

  commentsValue = ""

  // j'install le téléphone chez moi
  constructor(private http:HttpClient){}


  // fonction appel vers API
  getComments(){
    this.http.get(this.apiURL).subscribe({
      next:(data:any) =>{
        this.commentsList = data;
      }
    })

    }

  // Lancer la function dans j'ouvre le composant
  ngOnInit(){
    this.getComments();
  }

  
  submitForm(){
    // alert('tu as soumis le formulaire')
    this.http.post(this.apiURL,{
      user:'Igor',
      message:this.commentsValue
    }).subscribe({
      next:(res)=>{
        // ca s'est bien passé, donc on efface l'input et on rafraichie les coms
        console.log(res);
        this.commentsValue = '';
        this.getComments()
      }
    })
  }
}
