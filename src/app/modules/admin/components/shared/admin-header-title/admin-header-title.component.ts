import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-header-title',
	templateUrl: './admin-header-title.component.html',
	styleUrls: ['./admin-header-title.component.scss']
})
export class AdminHeaderTitleComponent implements OnInit {
	title: string;
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.otherService.currentheaderTitle.subscribe(title => {
			this.title = title;
		});	
	}

}
