import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
  	FormsModule,
    CommonModule,
    ProductRoutingModule
  ],
  declarations: []
})
export class ProductModule { }
