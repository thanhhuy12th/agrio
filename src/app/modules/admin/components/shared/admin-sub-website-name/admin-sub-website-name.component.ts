import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../cores/service/other.service";
import { StringLibary } from '../../../../../cores/lib/string';
@Component({
	selector: 'app-admin-sub-website-name',
	templateUrl: './admin-sub-website-name.component.html',
	styleUrls: ['./admin-sub-website-name.component.scss']
})
export class AdminSubWebsiteNameComponent implements OnInit {

	name: string;
	constructor (
		private router:Router,
		private activeRoute:ActivatedRoute, 
		private otherService:OtherService,
		public stringLib: StringLibary ) { 

	}

	ngOnInit() {
		this.otherService.currentSubWebsiteName.subscribe(name => {
			this.name = name;
		});	
	}

	onBackHome() {
		this.router.navigate([this.stringLib.convertHomeUrl(this.router.url)]);
	}

}
