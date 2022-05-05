import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
