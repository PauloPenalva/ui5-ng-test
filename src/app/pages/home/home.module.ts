import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ShellbarModule } from '@fundamental-ngx/core/shellbar';
import { LayoutPanelModule, ProductSwitchModule, SegmentedButtonModule, SideNavigationModule } from '@fundamental-ngx/core';

import { PlatformFormGeneratorModule } from '@fundamental-ngx/platform/form';
import { ValueHelpModule } from 'src/app/components/value-help/value-help.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShellbarModule,
    SideNavigationModule,
    LayoutPanelModule,
    ProductSwitchModule,
    SegmentedButtonModule,
    PlatformFormGeneratorModule,
    ValueHelpModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomeModule { }
