import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponentComponent } from './two-component.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [TwoComponentComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class TwoComponentModule { }
