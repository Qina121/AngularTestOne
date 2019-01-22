import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  RouteKey;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    const that = this;

    that.routeInfo.queryParams.subscribe(params => {
      console.log(params);
    });

    this.RouteKey = this.routeInfo.snapshot.params['id'];
    console.log(this.RouteKey);
  }

}
