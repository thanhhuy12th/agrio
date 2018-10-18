import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './pages/auth/auth-admin.component';

import { AdminComponentModule } from './components/index.module';

const routes: Routes = [
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "",
		component: AuthComponent,
		loadChildren: "./pages/auth/auth-admin.module#AuthAdminModule"
	},
	{
		path: "home",
		component: AuthComponent,
		loadChildren: "./pages/auth/auth-admin.module#AuthAdminModule"
	},
	{
		path: "**",
		component: AuthComponent
	},
];

@NgModule({
	declarations: [
		LoginComponent,
		AuthComponent
	],
	imports: [RouterModule.forChild(routes),AdminComponentModule],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
