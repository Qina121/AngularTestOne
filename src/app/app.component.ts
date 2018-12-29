import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularOberver';
  navList = [{id: 'one', text: '首页'}, {id: 'two', text: '第一个分页'}, {id: 'three', text: '这个是未填写的页面'}];
  constructor(
    private _router: Router
  ) {
  }
  navClick(e) {
    this._router.navigateByUrl('/' + e);
  }
}
