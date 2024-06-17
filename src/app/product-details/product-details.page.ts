import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductosService} from '../services/productos.service';
import {ProductosResponse} from '../interfaces/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product: ProductosResponse | null = null;
  

  constructor(private route: ActivatedRoute, private service: ProductosService) { }

  ngOnInit() {
    const productParam = this.route.snapshot.paramMap.get('product');
    if (productParam) {
      this.product = JSON.parse(productParam) as ProductosResponse;
    } else {
      // Manejar el error o redirigir
      console.error('No product data found in route parameters');
    }
  }

}
