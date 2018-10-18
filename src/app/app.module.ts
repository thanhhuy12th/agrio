import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherService } from './cores/service/other.service';

import { StringLibary } from './cores/lib/string';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    
    AppRoutingModule,

    
  ],
  providers: [OtherService,StringLibary],
  bootstrap: [AppComponent]
})
export class AppModule { }
