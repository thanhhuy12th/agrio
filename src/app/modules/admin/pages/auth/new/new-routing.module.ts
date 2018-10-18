import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewListComponent } from './new-list/new-list.component';
import { NewAddComponent } from './new-add/new-add.component';
import { NewUpdateComponent } from './new-update/new-update.component';
import { AdminComponentModule } from '../../../components/index.module';
const routes: Routes = [
	{
		path: "",
		component: NewListComponent
	},
	{
		path: "list",
		component: NewListComponent
	},
	{
		path: "add",
		component: NewAddComponent
	},
	{
		path: "update/:id",
		component: NewUpdateComponent
	}
];

@NgModule({
	declarations: [
		NewListComponent,
		NewAddComponent,
		NewUpdateComponent
	],
	imports: [RouterModule.forChild(routes),AdminComponentModule],
	exports: [RouterModule]
})
export class NewRoutingModule { }
