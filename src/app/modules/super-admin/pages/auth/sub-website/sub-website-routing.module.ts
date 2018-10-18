import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

import { SharedModule } from '../../../components/index.module';

const routes: Routes = [
	{
		path: "",
		component: ListComponent
	},
	{
		path: "add",
		component: AddComponent
	},
	{
		path: "update/:id",
		component: UpdateComponent
	}
];

@NgModule({
	declarations: [
		ListComponent,
		AddComponent,
		UpdateComponent
	],
	imports: [FormsModule,RouterModule.forChild(routes),SharedModule],
	exports: [RouterModule]
})
export class SubWebsiteRoutingModule { }
