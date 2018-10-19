import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-page-delivery-update',
	templateUrl: './admin-page-delivery-update.component.html',
	styleUrls: ['./admin-page-delivery-update.component.scss']
})
export class AdminPageDeliveryUpdateComponent implements OnInit {

	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.headerTitle = "Cập nhật hình thức vận chuyển";
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
