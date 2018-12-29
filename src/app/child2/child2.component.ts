import { Component, OnInit } from '@angular/core';
import { ProductService } from '../share/product.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  message;
  parentVal;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps.get().subscribe((result) => {
      console.log(result);
      this.message = result;
    });
  }

  childFun(message) {
    console.log(message);
    this.parentVal = message;
  }

  viewChild2(message) {
    console.log(message);
  }

}
