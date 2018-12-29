import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
@Injectable()

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {

  data = [
    {title: '冰箱', img: '/assets/bx.png', price: '500元'},
    {title: '电视', img: '/assets/ds.png', price: '1500元'},
    {title: '电脑', img: '/assets/dn.png', price: '5500元'},
    {title: '热水器', img: '/assets/rsq.png', price: '7500元'},
    {title: '空调', img: '/assets/kt.png', price: '5080元'}
  ];

  constructor() { }

  ngOnInit() {
    const that = this;
  }

}
