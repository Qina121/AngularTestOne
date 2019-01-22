import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { from } from 'rxjs';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import en from '@angular/common/locales/en';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
// import { BrowserModule } from '@angular/platform-browser';
import { TwoComponentModule } from './two-component/two-component.module';
import { FormModuleComponent } from './form-module/form-module.component';
import { Child2Component } from './child2/child2.component';
import { ParamersRouterComponent } from './paramers-router/paramers-router.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponentModule } from './page-not-found-component/page-not-found-component.module';
import { FiveComponent } from './five/five.component';
// import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    FormModuleComponent,
    Child2Component,
    ParamersRouterComponent,
    DetailComponent,
    FiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    // PageNotFoundComponentModule

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
