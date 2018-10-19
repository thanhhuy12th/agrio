import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-page-payment-list',
	templateUrl: './admin-page-payment-list.component.html',
	styleUrls: ['./admin-page-payment-list.component.scss']
})
export class AdminPagePaymentListComponent implements OnInit {

	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.headerTitle = "Danh sách hình thức thanh toán";
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
