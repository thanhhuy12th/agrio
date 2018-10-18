import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.headerTitle = "Danh sách website phụ";
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
