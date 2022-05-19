import { HttpClient } from '@angular/common/http';
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

  productos : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const userData : any = localStorage.getItem('userData');
    this.userData.username = JSON.parse(userData).name;
    this.userData.email = JSON.parse(userData).email;

    this.http.get('http://dev-api.nebula.cat/index.php/api/get-products').subscribe(
      (res: any) => {
        this.productos = res;
        console.log(this.productos);
      }
    )


  }

}
