import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../cores/service/other.service";
@Component({
	selector: 'app-general',
	templateUrl: './general.component.html',
	styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
	headerTitle: string = "Tổng quát";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
