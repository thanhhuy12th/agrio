import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageDeliveryListComponent } from './admin-page-delivery-list/admin-page-delivery-list.component';
import { AdminPageDeliveryAddComponent } from './admin-page-delivery-add/admin-page-delivery-add.component';
import { AdminPageDeliveryUpdateComponent } from './admin-page-delivery-update/admin-page-delivery-update.component';


const routes: Routes = [
	{
		path: '',
		component: AdminPageDeliveryListComponent
	},
	{
		path: 'list',
		component: AdminPageDeliveryListComponent
	},
	{
		path: 'add',
		component: AdminPageDeliveryAddComponent
	},
	{
		path: 'update/:id',
		component: AdminPageDeliveryUpdateComponent
	},
	{
		path: '**',
		component: AdminPageDeliveryListComponent
	},
];

@NgModule({
	declarations: [
		AdminPageDeliveryListComponent,
		AdminPageDeliveryAddComponent,
		AdminPageDeliveryUpdateComponent
	],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminSettingDeliveryRoutingModule { }
