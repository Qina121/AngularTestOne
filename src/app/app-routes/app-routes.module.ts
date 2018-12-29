import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {OneComponentComponent} from '../one-component/one-component.component';
import {TwoComponentComponent} from '../two-component/two-component.component';
import {PageNotFoundComponentComponent} from '../page-not-found-component/page-not-found-component.component';
import { ChildOneComponent } from '../child-one/child-one.component';
import { ChildTwoComponent } from '../child-two/child-two.component';
import { ChildThreeComponent } from '../child-three/child-three.component';
// import { FormModuleComponent } from '../form-module/form-module.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
export const appRoutes = [
  {
    path: '',
    redirectTo: 'one',
    pathMatch: 'full'
  },
  {
    path: 'one',
    component: OneComponentComponent,
    data: { title: 'Home', aaa: 'aaaa', bbb: 'bbbb'}
  },
  {
    path: 'two',
    component: TwoComponentComponent,
    children: [
      {path: 'childOne', component: ChildOneComponent, data: { breadcrumb: '第一个子模块' }},
      {path: 'childTwo', component: ChildTwoComponent, data: { breadcrumb: '轮播图'}},
      {path: 'childThree', component: ChildThreeComponent, data: { breadcrumb: '栅格式布局'}},
      {path: '', redirectTo: 'childOne', pathMatch: 'full'}
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgZorroAntdModule,

  ],
  declarations: [
    OneComponentComponent,
    TwoComponentComponent,
    PageNotFoundComponentComponent,
    // FormModuleComponent
  ],
  exports: [
    RouterModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})


export class AppRoutesModule { }
