import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../../cores/lib/string';
declare var $:any;

@Component({
	selector: 'app-admin-setting-payment-add',
	templateUrl: './admin-setting-payment-add.component.html',
	styleUrls: ['./admin-setting-payment-add.component.scss']
})
export class AdminSettingPaymentAddComponent implements OnInit {

	public options: Object = {
		placeholderText: 'Nhập nội dung chi tiết hình thức',
	}

	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	addPayment() {
		alert("Đã thêm!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/setting/payment']);
	}

}
