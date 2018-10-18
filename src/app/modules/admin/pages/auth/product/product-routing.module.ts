import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

import { AdminComponentModule } from '../../../components/index.module';

const routes: Routes = [
	{
		path: "",
		component: ProductListComponent
	},
	{
		path: "list",
		component: ProductListComponent
	},
	{
		path: "add",
		component: ProductAddComponent
	},
	{
		path: "update/:id",
		component: ProductUpdateComponent
	}
];

@NgModule({
	declarations: [
		ProductListComponent,
		ProductAddComponent,
		ProductUpdateComponent
	],
	imports: [	
		RouterModule.forChild(routes),
		AdminComponentModule,
    ],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
