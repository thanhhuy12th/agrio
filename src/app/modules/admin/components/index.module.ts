import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AdminHeaderTitleComponent } from './shared/admin-header-title/admin-header-title.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminSummaryComponent } from './general/admin-summary/admin-summary.component';
import { AdminSubWebsiteNameComponent } from './shared/admin-sub-website-name/admin-sub-website-name.component';
import { AdminSubWebsiteListComponent } from './shared/admin-sub-website-list/admin-sub-website-list.component';
import { OrderAdminListComponent } from './order/order-admin-list/order-admin-list.component';
import { OrderAdminDetailComponent } from './order/order-admin-detail/order-admin-detail.component';
import { AdminProductListComponent } from './product/admin-product-list/admin-product-list.component';
import { AdminProductAddComponent } from './product/admin-product-add/admin-product-add.component';
import { AdminProductUpdateComponent } from './product/admin-product-update/admin-product-update.component';
import { AdminNewListComponent } from './new/admin-new-list/admin-new-list.component';
import { AdminNewAddComponent } from './new/admin-new-add/admin-new-add.component';
import { AdminNewUpdateComponent } from './new/admin-new-update/admin-new-update.component';
import { AdminSettingGeneralComponent } from './setting/admin-setting-general/admin-setting-general.component';
import { AdminSettingDeliveryListComponent } from './setting/delivery/admin-setting-delivery-list/admin-setting-delivery-list.component';
import { AdminSettingDeliveryAddComponent } from './setting/delivery/admin-setting-delivery-add/admin-setting-delivery-add.component';
import { AdminSettingDeliveryUpdateComponent } from './setting/delivery/admin-setting-delivery-update/admin-setting-delivery-update.component';
import { AdminSettingPaymentListComponent } from './setting/payment/admin-setting-payment-list/admin-setting-payment-list.component';
import { AdminSettingPaymentAddComponent } from './setting/payment/admin-setting-payment-add/admin-setting-payment-add.component';
import { AdminSettingPaymentUpdateComponent } from './setting/payment/admin-setting-payment-update/admin-setting-payment-update.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgxPaginationModule,
		FroalaEditorModule.forRoot(), 
    	FroalaViewModule.forRoot()
	],
	declarations: [
		AdminHeaderTitleComponent, 
		ChangePasswordComponent, 
		AdminSummaryComponent, 
		AdminSubWebsiteNameComponent, 
		AdminSubWebsiteListComponent, 
		OrderAdminListComponent, 
		OrderAdminDetailComponent, 
		AdminProductListComponent, 
		AdminProductAddComponent, 
		AdminProductUpdateComponent, 
		AdminNewListComponent, 
		AdminNewAddComponent, 
		AdminNewUpdateComponent, 
		AdminSettingGeneralComponent, 
		AdminSettingDeliveryListComponent, 
		AdminSettingDeliveryAddComponent, 
		AdminSettingDeliveryUpdateComponent, 
		AdminSettingPaymentListComponent, 
		AdminSettingPaymentAddComponent, 
		AdminSettingPaymentUpdateComponent
	],
	exports: [
		AdminHeaderTitleComponent,
		ChangePasswordComponent,
		AdminSummaryComponent,
		AdminSubWebsiteNameComponent,
		AdminSubWebsiteListComponent,
		OrderAdminListComponent,
		OrderAdminDetailComponent,
		AdminProductListComponent, 
		AdminProductAddComponent, 
		AdminProductUpdateComponent,
		AdminNewListComponent, 
		AdminNewAddComponent, 
		AdminNewUpdateComponent,
		AdminSettingGeneralComponent, 
		AdminSettingDeliveryListComponent, 
		AdminSettingDeliveryAddComponent, 
		AdminSettingDeliveryUpdateComponent, 
		AdminSettingPaymentListComponent, 
		AdminSettingPaymentAddComponent, 
		AdminSettingPaymentUpdateComponent
	]
})
export class AdminComponentModule { }
