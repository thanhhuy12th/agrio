import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from './components/index.module';

const routes: Routes = [
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "",
		component: AuthComponent,
		loadChildren: "./pages/auth/auth.module#AuthModule"
	},
	{
		path: "home",
		component: AuthComponent,
		loadChildren: "./pages/auth/auth.module#AuthModule"
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
	imports: [RouterModule.forChild(routes),SharedModule],
	exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
