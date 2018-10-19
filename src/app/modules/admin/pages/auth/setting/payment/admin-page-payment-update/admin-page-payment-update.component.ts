import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-page-payment-update',
	templateUrl: './admin-page-payment-update.component.html',
	styleUrls: ['./admin-page-payment-update.component.scss']
})
export class AdminPagePaymentUpdateComponent implements OnInit {

	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.headerTitle = "Cập nhật hình thức thanh toán";
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
