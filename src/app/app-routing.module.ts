import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AdminComponent } from './modules/admin/admin.component';
import { SuperAdminComponent } from './modules/super-admin/super-admin.component';





const routes: Routes = [
	{
		path: ":idname/home",
		component: HomeComponent
	},
	{
		path: ":idname/admin",
		component: AdminComponent,
		loadChildren: './modules/admin/admin.module#AdminModule'
	},
	{
		path: "super-admin",
		component: SuperAdminComponent,
		loadChildren: './modules/super-admin/super-admin.module#SuperAdminModule'
	},
	{
		path: "**",
		component: HomeComponent
	}
];

@NgModule({
	declarations: [
		HomeComponent,
		AdminComponent,
		SuperAdminComponent
	],
	imports: [
		RouterModule.forRoot(routes),

	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
