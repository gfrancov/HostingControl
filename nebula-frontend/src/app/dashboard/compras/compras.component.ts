import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  totalProductos : any;

  totalDinero : number = 0;

  mesProductos : any;

  mesDinero : number = 0;

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
          console.log(producto);
          this.totalDinero += (parseInt(producto.price) * parseInt(producto.cantidad) );
          producto.created_at = producto.created_at.split("T")[0];
        });


      }
    );

    this.http.get(`http://dev-api.nebula.cat/index.php/api/lista-compra-mes/${this.userData.id}`).subscribe(
      (res: any) => {
        this.mesProductos = res;

        res.forEach((producto: any) => {
          console.log(producto);
          this.mesDinero += (parseInt(producto.price) * parseInt(producto.cantidad) );
        });


      }
    );




  }

}
