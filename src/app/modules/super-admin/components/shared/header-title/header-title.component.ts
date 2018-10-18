import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../cores/service/other.service";
@Component({
	selector: 'app-header-title',
	templateUrl: './header-title.component.html',
	styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {

	title: string;

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService ) { 
		
	}

	ngOnInit() {
		this.otherService.currentheaderTitle.subscribe(title => {
			this.title = title;
		});	
	}

}
