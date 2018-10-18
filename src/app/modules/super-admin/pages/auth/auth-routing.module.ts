import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from '../auth/general/general.component';
import { OrderComponent } from '../auth/order/order.component';
import { SubWebsiteComponent } from '../auth/sub-website/sub-website.component';
import { SubWebsiteAccountComponent } from '../auth/sub-website-account/sub-website-account.component';
import { SharedModule } from '../../components/index.module';


const routes: Routes = [
	{
		path: "",
		component: GeneralComponent,
	},
	{
		path: "order",
		component: OrderComponent,
		loadChildren: "../auth/order/order.module#OrderModule"
	},
	{
		path: "sub-website",
		component: SubWebsiteComponent,
		loadChildren: "../auth//sub-website/sub-website.module#SubWebsiteModule"
	},
	{
		path: "sub-website-account",
		component: SubWebsiteAccountComponent,
		loadChildren: "../auth/sub-website-account/sub-website-account.module#SubWebsiteAccountModule"
	},
	{
		path: "**",
		component: GeneralComponent,
	},
];

@NgModule({
	declarations: [
		GeneralComponent,
		OrderComponent,
		SubWebsiteComponent,
		SubWebsiteAccountComponent
	],
	imports: [RouterModule.forChild(routes),SharedModule],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
