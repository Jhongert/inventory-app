import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  template: `
    <img class="product-image" [src]="product.imageurl">
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;

  @HostBinding('attr.class') cssClass = "img";
  
  constructor() { }

  ngOnInit() {
  }

}
