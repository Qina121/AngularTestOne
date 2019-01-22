import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '2200';
  title = 'angularOberver';
  navList = [{id: 'one', text: '首页'},
            {id: 'two', text: '第一个分页'},
            {id: 'three', text: '这个是未填写的页面'},
            {id: 'four', text: '路由传参'},
            {id: 'five', text: '上传照片'}];
  constructor(
    private _router: Router
  ) {
  }
  navClick(e) {
    this._router.navigateByUrl('/' + e);
  }
}
