import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../../../components/index.module';
const routes: Routes = [
	{
		path: "",
		component: ListComponent
	},
	{
		path: "list",
		component: ListComponent
	},
	{
		path: ":id",
		component: DetailComponent
	},
	{
		path: "list/:id",
		component: DetailComponent
	}
];

@NgModule({
	declarations: [
		ListComponent,
		DetailComponent
	],
	imports: [RouterModule.forChild(routes),SharedModule],
	exports: [RouterModule]
})
export class OrderRoutingModule { }
