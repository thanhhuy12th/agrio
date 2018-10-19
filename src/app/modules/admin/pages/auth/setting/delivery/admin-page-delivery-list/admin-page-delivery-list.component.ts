import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-page-delivery-list',
	templateUrl: './admin-page-delivery-list.component.html',
	styleUrls: ['./admin-page-delivery-list.component.scss']
})
export class AdminPageDeliveryListComponent implements OnInit {

	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.headerTitle = "Danh sách hình thức vận chuyển";
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
