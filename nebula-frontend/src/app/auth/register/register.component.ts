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

        console.log(res);

        if(res.status == 'success') {

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Registrado!',
            text: 'Te has registrado correctamente',
            showConfirmButton: true,
            confirmButtonColor: '#7ea966',
            confirmButtonText: 'Iniciar sesión'
          }).then(function() {
            window.location.href = "/login";
          });

        } else {

          let errMessage = '';

          if(res.data.email) {
            errMessage = res.data.email[0];
          } else if(res.data.name) {
            errMessage = res.data.name[0];
          } else if(res.data.password) {
            errMessage = res.data.password[0];
          } else {
            errMessage = "No se ha podido registrar tu usuario."
          }

          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '¡Vaya!',
            text: errMessage,
            showConfirmButton: true,
            confirmButtonColor: '#f27474',
            confirmButtonText: 'Volver',
            timer: 5000
          });
        }

      }
      
    );

  }

}
