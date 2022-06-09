import { Injectable, OnInit } from '@angular/core';
import { product } from 'src/models/product';
import * as productsData from '../assets/product_examples.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  private products: any = JSON.stringify(productsData);

  constructor() {
   }

  ngOnInit(): void {
  }

  getProductList(){
    const products: product[] = Object.values(JSON.parse(this.products));
    return products.filter(prod => prod.category?.name.includes("Hauptspeisen"));
  }
}
