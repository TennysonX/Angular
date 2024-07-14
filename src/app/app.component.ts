import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, DatePipe,DecimalPipe,ReactiveFormsModule],
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
  number = 1500.5

  name = new FormControl('')

  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required)
})

  profileFormSubmit() {
    console.log(this.profileForm.valid)
    console.log(this.profileForm.value)
  }

  empList = [
    { FirstName: "A", LastName: "Yen", Salary: "18000.5"},
    { FirstName: "B", LastName: "Hern", Salary: "18000.25"},
    { FirstName: "C", LastName: "Lek", Salary: "18000.00001"}
  ]

  constructor(private http: HttpClient){

  }

  // API 
  onGetAll(){
    console.log('--- onGetAll ---')

    let url = 'https://669338d0c6be000fa07a1a18.mockapi.io/todo/v1/topic'
    this.http.get(url).subscribe(
      {
        next: (result) => {
          console.log(result)
        }
      }
    )
  }
  onGetById(){
    console.log('--- onGetById---')

    let id = 10
    let url = `https://669338d0c6be000fa07a1a18.mockapi.io/todo/v1/topic/${id}`
    this.http.get(url).subscribe(
      {
        next: (result) => {
          console.log(result)
        }
      }
    )
  }
  onPost(){
    console.log('--- onPost ---')
  }
  onPut(){
    console.log('--- onPut ---')
  }
  onDelete(){
    console.log('--- onDelete ---')
  }
}