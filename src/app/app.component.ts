import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo_List';
  imageCoverUrl = '/images/todo-list.png'
  onimageClick(){
    alert("ใ ค ร ก ด เ ป็ น เ ก ย์")
  }
  major = "programmer"

  items = [
    "A","B","C","D","E"
  ]
  size = "M"

  sizelist = [
    "S","M","M","XL",'XXL','XXXL'
  ]

  now = new Date()
}