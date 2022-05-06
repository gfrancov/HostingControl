import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';  

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

    this.http.post('http://dev-api.nebula.cat/index.php/api/register', this.datosRegistro).subscribe(
      
      (res: any) => {

      if(res.status == 'success') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Registrado!',
          text: 'Te has registrado correctamente',
          showConfirmButton: true,
          confirmButtonColor: '#7ea966'
        }).then(function() {
          window.location.href = "/login";
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '¡Oopps!',
          text: 'Has introducido algo mal creo...',
          showConfirmButton: true,
          timer: 5000
        });
      }

      }
      
    );

  }

}
