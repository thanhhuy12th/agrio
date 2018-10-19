import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPagePaymentListComponent } from './admin-page-payment-list/admin-page-payment-list.component';
import { AdminPagePaymentAddComponent } from './admin-page-payment-add/admin-page-payment-add.component';
import { AdminPagePaymentUpdateComponent } from './admin-page-payment-update/admin-page-payment-update.component';

import { AdminComponentModule } from '../../../../components/index.module';

const routes: Routes = [
	{
		path: '',
		component: AdminPagePaymentListComponent
	},
	{
		path: 'list',
		component: AdminPagePaymentListComponent
	},
	{
		path: 'add',
		component: AdminPagePaymentAddComponent
	},
	{
		path: 'update/:id',
		component: AdminPagePaymentUpdateComponent
	},
	{
		path: '**',
		component: AdminPagePaymentListComponent
	},
];

@NgModule({
	declarations: [
		AdminPagePaymentListComponent,
		AdminPagePaymentAddComponent,
		AdminPagePaymentUpdateComponent
	],
	imports: [RouterModule.forChild(routes), AdminComponentModule],
	exports: [RouterModule]
})
export class AdminSettingPaymentRoutingModule { }
