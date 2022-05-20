import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  userData : any = {
    username: '',
    email: '',
    id: ''
  }

  todayDate : any = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  totalProductos : any;
  llistatProductes : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const userData : any = localStorage.getItem('userData');
    this.userData.username = JSON.parse(userData).name;
    this.userData.email = JSON.parse(userData).email;
    this.userData.id = JSON.parse(userData).id;

    this.http.get(`http://dev-api.nebula.cat/index.php/api/lista-compra/${this.userData.id}`).subscribe(
      (res: any) => {
        this.totalProductos = res;

        res.forEach((producto: any) => {
          producto.created_at = producto.created_at.split("T")[0];
        });


      }
    );

    this.http.get(`http://dev-api.nebula.cat/index.php/api/get-products`).subscribe(
      (res: any) => {

        res.forEach((producto: any) => {
          producto.cantidad = 1;
        });

        this.llistatProductes = res;
      }
    );


  }

  comprar(id : any, cantidad : any) {

    let datosCompra = {
      id: id,
      quantity: cantidad,
      user: this.userData.id
    }

    console.log(datosCompra);

    this.http.post('http://dev-api.nebula.cat/index.php/api/comprar-producto', datosCompra).subscribe(

      (res : any) => {
        
        if(res.status != 'success') {

          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '¡Vaya!',
            text: '¡No se ha podido comprar!',
            showConfirmButton: true,
            confirmButtonColor: '#f27474',
            confirmButtonText: 'Volver',
            timer: 5000
          });

        } else {

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Perfecto!',
            text: 'Has comprado el producto correctamente!',
            showConfirmButton: true,
            confirmButtonColor: '#7ea966',
            confirmButtonText: 'Seguir comprando'
          }).then(function() {
            window.location.href = "/compras";
          });

        }

      }


    )
    
  }

}
