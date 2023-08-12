import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueHelpComponent } from './value-help/value-help.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlatformValueHelpDialogModule } from '@fundamental-ngx/platform';
import { FundamentalNgxCoreModule, InputGroupModule } from '@fundamental-ngx/core';

@NgModule({
  declarations: [
    ValueHelpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlatformValueHelpDialogModule,
    InputGroupModule,
    FundamentalNgxCoreModule,
  ],
})
export class ValueHelpModule { }
