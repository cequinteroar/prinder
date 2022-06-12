import { Injectable, OnInit } from '@angular/core';
import { product } from 'src/models/product';
import * as productsData from '../assets/product_examples.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  private products: any = JSON.stringify(productsData);
  private likedProducts: product[] = [];
  private dislikedProducts: product[] = [];

  constructor() {
   }

  ngOnInit(): void {
  }

  getProductList(){
    const products: product[] = Object.values(JSON.parse(this.products));
    return products.filter(prod => prod.category?.name.includes("Hauptspeisen"));
  }

  setNewLikedProduct(likedProduct: product){
    this.likedProducts.push(likedProduct);
  }

  setNewDislikedProduct(dislikedProduct: product){
    this.dislikedProducts.push(dislikedProduct);
  }
}
