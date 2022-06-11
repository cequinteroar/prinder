import { Component, OnInit } from '@angular/core';
import { product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ProductService ]
})
export class AppComponent implements OnInit{
  title = 'prinder';
  showNoneProducts: boolean = false;
  products: product[] = [];
  likedProducts: product[] = [];
  dislikedProducts: product[] = [];
  currentProduct: product = {} as product;

  constructor(private productService: ProductService){
  }
  
  ngOnInit() {
    this.products = this.productService.getProductList();
    const currentProduct = this.products[0];
    this.setCurrentProduct(currentProduct);
  }

  setCurrentProduct(product: product) {
    this.currentProduct = product;
  }

  noItemsManager(){
    if(this.products.length === 0){
      this.showNoneProducts = true;
    }
  }

  like() {
    const newProducts = this.products.slice(1);
    this.products = newProducts;
    this.productService.setNewLikedProduct(this.currentProduct);
    const currentProduct = newProducts[0];
    this.setCurrentProduct(currentProduct);
    this.noItemsManager();
  }

  dislike(){
    const newProducts = this.products.slice(1);
    this.products = newProducts;
    this.productService.setNewDislikedProduct(this.currentProduct);
    const currentProduct = newProducts[0];
    this.setCurrentProduct(currentProduct);
    this.noItemsManager();
  }
}
