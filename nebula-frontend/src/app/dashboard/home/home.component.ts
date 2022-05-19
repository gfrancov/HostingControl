import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData : any = {
    username: '',
    email: '',
  }

  constructor() { }

  ngOnInit(): void {

    const userData : any = localStorage.getItem('userData');
    this.userData.username = JSON.parse(userData).name;
    this.userData.email = JSON.parse(userData).email;


  }

}
