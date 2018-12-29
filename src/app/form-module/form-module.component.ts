import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ProductService } from '../share/product.service';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.css']
})
export class FormModuleComponent implements OnInit {
  @Input() childTwo;
  @Output() public Childcancel = new EventEmitter();
  // hide = true;
  constructor(private ps: ProductService) {
  }

  ngOnInit() {
  }

  cancel() {
    this.ps.send('通过service在点击form取消按钮时，向child2传值');
    this.Childcancel.emit(1);
  }

}
