import { Component, OnInit } from '@angular/core';
import { product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';
import { DataMachineService } from 'src/services/data-machine.service';
import { interval } from 'rxjs';

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

  constructor(private productService: ProductService, private dataMachineService: DataMachineService){
  }
  
  ngOnInit() {
    this.products = this.productService.getProductList();
    const currentProduct = this.products[0];
    this.setCurrentProduct(currentProduct);
    const observInterval = interval(5000)
    const x = observInterval.subscribe((val) => this.dataMachineService.search().subscribe(
      data => {
        console.log(data);
        if(val > 0 && (data[val -1].id !== data[val])){
          this.products.push(data[val]);
        }
      }
    ));
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
  
  //  Observable things
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }
}
