import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductosResponse} from '../interfaces/Products';
import {CatalogoResponse} from '../interfaces/Catalogo';
import {ProductosService} from '../services/productos.service';

import { NavigationExtras,Router } from '@angular/router';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage {

  public list_cate: CatalogoResponse[]=[];
  public list_produ: ProductosResponse[]=[];
  selectedCategory: number | undefined;

  constructor(private serviceProd:ProductosService,private router: Router) { }

  ngOnInit() {
    this.serviceProd.getCategories().subscribe(data => {
      this.list_cate = data;
    });
  }

  onCategoryChange(event: any) {
    const categoryId = event.detail.value;
    this.selectedCategory = categoryId;
    this.serviceProd.getProductsByCategory(categoryId).subscribe(data => {
      this.list_produ = data;
    });
  }

  goToProductDetails(product: ProductosResponse) {
    this.router.navigate(['/product-details', { product: JSON.stringify(product) }]);
  }
}
