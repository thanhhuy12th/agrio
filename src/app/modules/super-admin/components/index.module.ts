import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { HeaderTitleComponent } from './shared/header-title/header-title.component';
import { SummaryComponent } from './general/summary/summary.component';
import { ListSubWebsiteComponent } from './sub-website/list-sub-website/list-sub-website.component';
import { AddSubWebsiteComponent } from './sub-website/add-sub-website/add-sub-website.component';
import { UpdateSubWebsiteComponent } from './sub-website/update-sub-website/update-sub-website.component';
import { ListSubWebsiteAccountComponent } from './sub-website-account/list-sub-website-account/list-sub-website-account.component';
import { AddSubWebsiteAccountComponent } from './sub-website-account/add-sub-website-account/add-sub-website-account.component';
import { UpdateSubWebsiteAccountComponent } from './sub-website-account/update-sub-website-account/update-sub-website-account.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';





@NgModule({
  declarations: [
    HeaderTitleComponent,
    SummaryComponent,
    ListSubWebsiteComponent,
    AddSubWebsiteComponent,
    UpdateSubWebsiteComponent,
    AddSubWebsiteAccountComponent,
    UpdateSubWebsiteAccountComponent,
    ListSubWebsiteAccountComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    // component
    CommonModule,
    HeaderTitleComponent,
    SummaryComponent,
    ListSubWebsiteComponent,
    AddSubWebsiteComponent,
    UpdateSubWebsiteComponent,
    AddSubWebsiteAccountComponent,
    UpdateSubWebsiteAccountComponent,
    ListSubWebsiteAccountComponent,
    OrderListComponent,
    OrderDetailComponent
  ]
})
export class SharedModule {}