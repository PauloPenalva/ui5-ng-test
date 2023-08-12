import { CommonModule  } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ThemingModule, ThemingService } from '@fundamental-ngx/core/theming';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { FormsModule } from '@fundamental-ngx/cdk/forms';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ThemingModule.withConfig({
      defaultTheme: 'sap_fiori_3',
      changeThemeOnQueryParamChange: false,
    }),
    AppRoutingModule,
    RouterModule.forRoot([]),
    FundamentalNgxPlatformModule,
    FundamentalNgxCoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule {
  constructor(themingService: ThemingService) {
    themingService.init();
  }
}
