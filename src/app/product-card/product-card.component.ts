import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: product = {} as product;
  backgroundImage: string = "";
  private defaultImage: string = "../../assets/box2-fill.svg"

  constructor() {
   }

  ngOnInit(): void {
    this.backgroundImage = "url("+this.product.imageSet ? this.product.imageSet[0].url : this.defaultImage+")";
    console.log(this.product);
  }

}
