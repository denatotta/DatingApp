import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  users:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
this.http.get('http://localhost:5001/Api/Users').subscribe({
next: response=>this.users=response,
complete:()=>console.log("Request has Completed")

})
}}
