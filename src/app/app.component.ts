import { Component, OnInit } from '@angular/core';
import { product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prinder';
  products: product[] = [];
  currentProduct: product = {} as product;

  constructor(private productService: ProductService){
  }
  
  ngOnInit() {
    this.products = this.productService.getProductList();
    this.currentProduct = this.products[0];
    console.log(this.products);
  }
}
