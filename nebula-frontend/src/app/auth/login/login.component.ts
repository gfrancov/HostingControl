import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Forms
  datosLogin : any = {
    email: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  login() {
    
    this.http.post('http://dev-api.nebula.cat/index.php/api/login', this.datosLogin).subscribe(

      (res: any) => {

        console.log(res);
        if(res.status != 'success') {

          let errMessage = '';

          if(res.data.email) {
            errMessage = res.data.email[0];
          } else if(res.data.password) {
            errMessage = res.data.password[0];
          } else if (res.data.login) {
            errMessage = res.data.login;
          } else {
            errMessage = "No se ha podido comprobar tu usuario."
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

        } else {

          console.log(res.data);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userData', JSON.stringify(res.data));

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Maquinote!',
            text: 'Te has logueao',
            showConfirmButton: true,
            confirmButtonColor: '#7ea966',
            confirmButtonText: 'Iniciar sesión'
          });

        }

      }

    );

  }

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ya estás logueado!',
        text: 'Tu inicio de sesión ha sido recordado',
        showConfirmButton: true,
        confirmButtonColor: '#7ea966',
        confirmButtonText: 'Acceder'
      }).then(function() {
        window.location.href = "/home";
      });;
    }
  }

}
