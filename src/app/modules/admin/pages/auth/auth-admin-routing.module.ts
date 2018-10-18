import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { GeneralComponent } from './general/general.component';
import { NewComponent } from './new/new.component';
import { OrderComponent } from './order/order-admin.component';
import { ProductComponent } from './product/product.component';
import { SectionManagementComponent } from './section-management/section-management.component';
import { SettingComponent } from './setting/setting.component';

import { AdminComponentModule } from '../../components/index.module';

const routes: Routes = [
	{
		path: "",
		component: GeneralComponent,
	},
	{
		path: "change-password",
		component: ChangePasswordComponent,
	},
	{
		path: "new",
		component: NewComponent,
		loadChildren: "../auth/new/new.module#NewModule"
	},
	{
		path: "order",
		component: OrderComponent,
		loadChildren: "../auth/order/order-admin.module#OrderAdminModule"
	},
	{
		path: "product",
		component: ProductComponent,
		loadChildren: "../auth/product/product.module#ProductModule"
	},
	{
		path: "section",
		component: SectionManagementComponent,
		loadChildren: "../auth/section-management/section-management.module#SectionManagementModule"
	},
	{
		path: "setting",
		component: SettingComponent,
		loadChildren: "../auth/setting/setting.module#SettingModule"
	},
	{
		path: "**",
		component: GeneralComponent,
	}
];

@NgModule({
	declarations: [
		ChangePasswordComponent,
		GeneralComponent,
		NewComponent,
		OrderComponent,
		ProductComponent,
		SectionManagementComponent,
		SettingComponent
	],
	imports: [RouterModule.forChild(routes),AdminComponentModule],
	exports: [RouterModule]
})
export class AuthAdminRoutingModule { }
