import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-badge',
  templateUrl: './product-badge.component.html',
  styleUrls: ['./product-badge.component.scss']
})
export class ProductBadgeComponent implements OnInit {
  @Input() badge: any = {};
  toShow: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.toShow = this.badge.name === "badge" ? this.badge.value : this.badge.name;
  }

}
