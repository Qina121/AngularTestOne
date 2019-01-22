import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private _router: Router, private routeInfo: ActivatedRoute) { }
  paramsRoute;
  param;
  ngOnInit() {
    this.paramsRoute = this.routeInfo.snapshot.params['id'];
    const that = this;
    console.log(this.routeInfo.snapshot.params['id']);
    // if (that.paramsRoute === '0') {
    //   console.log(that.paramsRoute);
    //   that.param = 'one';
    // } else if (that.paramsRoute === '1') {
    //   that.param = 'two';
    // } else if (that.paramsRoute === '2') {
    //   that.param = 'three';
    // } else if (that.paramsRoute === '3') {
    //   that.param = 'four';
    // }
  }

  selectColor(e) {
    if (e === 0) {
      this._router.navigate(['/detail/'], { queryParams: { id: 1 } });
      // this._router.navigateByUrl('/detail/' + e);
    } else if (e === 1 ) {
      this._router.navigateByUrl('/detail/' + e);
    } else if (e === 2 ) {
      this._router.navigateByUrl('/detail/' + e);
    } else if (e === 3) {
      this._router.navigateByUrl('/detail/' + e);
    }
    console.log(this.routeInfo.snapshot.params['id']);

  }

}
