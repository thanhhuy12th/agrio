import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutProductComponent } from './about-product/about-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientCommentOneComponent } from './client-comment-one/client-comment-one.component';
import { ClientCommentTwoComponent } from './client-comment-two/client-comment-two.component';
import { ElementComponent } from './element/element.component';
import { FeatureComponent } from './feature/feature.component';
import { GuildComponent } from './guild/guild.component';
import { HelpfulComponent } from './helpful/helpful.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HotlineComponent } from './hotline/hotline.component';
import { LogoComponent } from './logo/logo.component';
import { MediaComponent } from './media/media.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
	{
		path: "about-product",
		component: AboutProductComponent
	},
	{
		path: "about-us",
		component: AboutUsComponent
	},
	{
		path: "client-one",
		component: ClientCommentOneComponent
	},
	{
		path: "client-two",
		component: ClientCommentTwoComponent
	},
	{
		path: "element",
		component: ElementComponent
	},
	{
		path: "feature",
		component: FeatureComponent
	},
	{
		path: "guild",
		component: GuildComponent
	},
	{
		path: "helpful",
		component: HelpfulComponent
	},
	{
		path: "home-slider",
		component: HomeSliderComponent
	},
	{
		path: "hotline",
		component: HotlineComponent
	},
	{
		path: "logo",
		component: LogoComponent
	},
	{
		path: "media",
		component: MediaComponent
	},
	{
		path: "question",
		component: QuestionComponent
	},
];

@NgModule({
	declarations: [
		AboutProductComponent,
		AboutUsComponent,
		ClientCommentOneComponent,
		ClientCommentTwoComponent,
		ElementComponent,
		FeatureComponent,
		GuildComponent,
		HelpfulComponent,
		HomeSliderComponent,
		HotlineComponent,
		LogoComponent,
		MediaComponent,
		QuestionComponent
	],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SectionManagementRoutingModule { }
