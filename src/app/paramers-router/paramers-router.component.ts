import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paramers-router',
  templateUrl: './paramers-router.component.html',
  styleUrls: ['./paramers-router.component.css']
})
export class ParamersRouterComponent implements OnInit {
  items = [
    {id: 'one', color: '粉色'},
    {id: 'one', color: '绿色'},
    {id: 'one', color: '浅蓝色'},
    {id: 'one', color: '西瓜红'}
  ];
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  selectColor(e) {
    console.log(e);
    if (e === '0') {
      this._router.navigateByUrl('/:' + e);
    }
  }

}
