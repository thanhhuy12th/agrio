import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-page-payment-add',
	templateUrl: './admin-page-payment-add.component.html',
	styleUrls: ['./admin-page-payment-add.component.scss']
})
export class AdminPagePaymentAddComponent implements OnInit {

	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.headerTitle = "Thêm hình thức thanh toán";
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
