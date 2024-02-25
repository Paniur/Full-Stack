import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users: any;
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle()
  {
    this.registerMode = !this.registerMode;
  }
  
    getUsers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe({
          next: (response) => this.users = response,
          error: (e) => console.log(e),
          complete: () => console.log('req complated')
    })

  }

  cancleRegisterMode(event: boolean)
  {
    this.registerMode = event;
  }
}
