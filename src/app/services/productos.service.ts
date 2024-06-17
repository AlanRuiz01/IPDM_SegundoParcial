import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductosResponse} from '../interfaces/Products';
import {CatalogoResponse} from '../interfaces/Catalogo';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  private categoriesUrl = 'https://www.hostcatedral.com/api/appNoti/public/getCategoriasProductos';
  private productsUrl = 'https://www.hostcatedral.com/api/appNoti/public/getProductosPorCategoriaID/';

  getCategories(): Observable<CatalogoResponse[]> {
    return this.http.get<CatalogoResponse[]>(this.categoriesUrl);
  }

  getProductsByCategory(categoryId: number): Observable<ProductosResponse[]> {
    return this.http.get<ProductosResponse[]>(`${this.productsUrl}${categoryId}`);
  }

}
