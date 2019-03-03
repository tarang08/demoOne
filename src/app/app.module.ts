import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SidebarService } from './sidebar/sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
