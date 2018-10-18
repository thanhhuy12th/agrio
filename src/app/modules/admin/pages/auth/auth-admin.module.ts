import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthAdminRoutingModule } from './auth-admin-routing.module';

@NgModule({
  imports: [
  	FormsModule,
    CommonModule,
    AuthAdminRoutingModule
  ],
  declarations: []
})
export class AuthAdminModule { }
