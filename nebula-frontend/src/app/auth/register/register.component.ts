import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Forms
  datosRegistro: any = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  registro() {

    this.http.post('http://dev-api.nebula.cat/index.php/api/register', this.datosRegistro).subscribe(res => {
      console.log(res);
    });

  }

}
