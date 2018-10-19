import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAdminSectionAboutUsComponent } from './p-admin-section-about-us/p-admin-section-about-us.component';
import { PAdminSectionAboutProductComponent } from './p-admin-section-about-product/p-admin-section-about-product.component';
import { PAdminSectionClientOneComponent } from './p-admin-section-client-one/p-admin-section-client-one.component';
import { PAdminSectionClientTwoComponent } from './p-admin-section-client-two/p-admin-section-client-two.component';
import { PAdminSectionElementComponent } from './p-admin-section-element/p-admin-section-element.component';
import { PAdminSectionFeatureComponent } from './p-admin-section-feature/p-admin-section-feature.component';
import { PAdminSectionGuildComponent } from './p-admin-section-guild/p-admin-section-guild.component';
import { PAdminSectionHelpfulComponent } from './p-admin-section-helpful/p-admin-section-helpful.component';
import { PAdminSectionHomeSliderComponent } from './p-admin-section-home-slider/p-admin-section-home-slider.component';
import { PAdminSectionHotlineComponent } from './p-admin-section-hotline/p-admin-section-hotline.component';
import { PAdminSectionLogoComponent } from './p-admin-section-logo/p-admin-section-logo.component';
import { PAdminSectionMediaComponent } from './p-admin-section-media/p-admin-section-media.component';
import { PAdminSectionQuestionComponent } from './p-admin-section-question/p-admin-section-question.component';

import { AdminComponentModule } from '../../../components/index.module';

const routes: Routes = [
	{
		path: "about-product",
		component: PAdminSectionAboutProductComponent
	},
	{
		path: "about-us",
		component: PAdminSectionAboutUsComponent
	},
	{
		path: "client-one",
		component: PAdminSectionClientOneComponent
	},
	{
		path: "client-two",
		component: PAdminSectionClientTwoComponent
	},
	{
		path: "element",
		component: PAdminSectionElementComponent
	},
	{
		path: "feature",
		component: PAdminSectionFeatureComponent
	},
	{
		path: "guild",
		component: PAdminSectionGuildComponent
	},
	{
		path: "helpful",
		component: PAdminSectionHelpfulComponent
	},
	{
		path: "home-slider",
		component: PAdminSectionHomeSliderComponent
	},
	{
		path: "hotline",
		component: PAdminSectionHotlineComponent
	},
	{
		path: "logo",
		component: PAdminSectionLogoComponent
	},
	{
		path: "media",
		component: PAdminSectionMediaComponent
	},
	{
		path: "question",
		component: PAdminSectionQuestionComponent
	},
];

@NgModule({
	declarations: [
		PAdminSectionAboutUsComponent, 
	  	PAdminSectionAboutProductComponent, 
	  	PAdminSectionClientOneComponent, 
	  	PAdminSectionClientTwoComponent, 
	  	PAdminSectionElementComponent, 
	  	PAdminSectionFeatureComponent, 
	  	PAdminSectionGuildComponent, 
	  	PAdminSectionHelpfulComponent, 
	  	PAdminSectionHomeSliderComponent, 
	  	PAdminSectionHotlineComponent, 
	  	PAdminSectionLogoComponent, 
	  	PAdminSectionMediaComponent, 
	  	PAdminSectionQuestionComponent
	],
	imports: [RouterModule.forChild(routes),AdminComponentModule],
	exports: [RouterModule]
})
export class SectionManagementRoutingModule { }
