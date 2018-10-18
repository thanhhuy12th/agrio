import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

import { AdminComponentModule } from '../../../components/index.module';

const routes: Routes = [
	{
		path: "",
		component: OrderListComponent
	},
	{
		path: "list",
		component: OrderListComponent
	},
	{
		path: ":id",
		component: OrderDetailComponent
	},
	{
		path: "list/:id",
		component: OrderDetailComponent
	}
];

@NgModule({
	declarations: [
		OrderListComponent,
		OrderDetailComponent
	],
	imports: [RouterModule.forChild(routes),AdminComponentModule],
	exports: [RouterModule]
})
export class OrderAdminRoutingModule { }
