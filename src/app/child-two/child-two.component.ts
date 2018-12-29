import { Component, OnInit, ViewChild } from '@angular/core';
import { FormModuleComponent } from '../form-module/form-module.component';
import { ProductService } from '../share/product.service';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  @ViewChild(Child2Component) Child2;
  childTwo = true;
  child2Message = '这个是本地模板变量产生的事件哦~';
  view = '这个是viewChild功能传的值哦~';
  constructor(private ps: ProductService) { }

  ngOnInit() {
  }

  moduleClick() {
    this.childTwo = false;
  }

  cancel(e) {
    this.childTwo = true;
  }

  viewChild() {
    this.Child2.viewChild2(this.view);
  }

}
