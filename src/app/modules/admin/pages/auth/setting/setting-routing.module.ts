import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSettingDeliveryComponent } from './delivery/admin-setting-delivery.component';
import { SettingGeneralComponent } from './setting-general/setting-general.component';
import { AdminSettingPaymentComponent } from './payment/admin-setting-payment.component';
import { AdminComponentModule } from '../../../components/index.module';
const routes: Routes = [
	{
		path: '',
		component: SettingGeneralComponent
	},
	{
		path: 'general',
		component: SettingGeneralComponent
	},
	{
		path: 'delivery',
		component: AdminSettingDeliveryComponent,
		loadChildren: './delivery/admin-setting-delivery.module#AdminSettingDeliveryModule'
	},
	{
		path: 'payment',
		component: AdminSettingPaymentComponent,
		loadChildren: './payment/admin-setting-payment.module#AdminSettingPaymentModule'
	},
	{
		path: '**',
		component: SettingGeneralComponent
	},
];

@NgModule({
	declarations: [
		AdminSettingDeliveryComponent,
		SettingGeneralComponent,
		AdminSettingPaymentComponent
	],
	imports: [RouterModule.forChild(routes),AdminComponentModule],
	exports: [RouterModule]
})
export class SettingRoutingModule { }
