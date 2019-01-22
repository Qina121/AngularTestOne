import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
registerLocaleData(zh);
import { PageNotFoundComponentComponent} from './page-not-found-component.component';

@NgModule({
  declarations: [PageNotFoundComponentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgZorroAntdModule,
    FormsModule
  ],
  exports: [PageNotFoundComponentComponent]
  // providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class PageNotFoundComponentModule { }
