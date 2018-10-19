import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../../cores/service/other.service";

@Component({
	selector: 'app-admin-page-delivery-add',
	templateUrl: './admin-page-delivery-add.component.html',
	styleUrls: ['./admin-page-delivery-add.component.scss']
})
export class AdminPageDeliveryAddComponent implements OnInit {

	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.headerTitle = "Thêm hình thức vận chuyển";
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
