import { Component, Input, OnInit } from '@angular/core';
import { attribute } from 'src/models/attribute';
import { product } from 'src/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: product = {} as product;
  backgroundImage: string = "";
  productDesc: string = "";
  displayProd: boolean = true;
  badges: attribute[] = [];
  private defaultImage: string = "../../assets/box2-fill.svg"

  constructor() {
   }

  ngOnInit(): void {
    this.backgroundImage = "url("+this.product.imageSet ? this.product.imageSet[0].url : this.defaultImage+")";
    this.productDesc = this.product.description;
    const attributes = this.product.attributes.filter(att => att.value);
    // Current badge (example of feature), TODO: optimal way to show badges on card
    this.badges = attributes.filter(att => att.category === "Meat" || att.category === "Kitchen" || att.name === "badge");
  }

  seeMore(): void {
    const newValue = !this.displayProd
    this.displayProd = newValue;
  }

}
