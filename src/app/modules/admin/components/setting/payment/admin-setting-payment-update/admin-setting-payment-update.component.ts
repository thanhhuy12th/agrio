import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../../cores/lib/string';
declare var $:any;

@Component({
	selector: 'app-admin-setting-payment-update',
	templateUrl: './admin-setting-payment-update.component.html',
	styleUrls: ['./admin-setting-payment-update.component.scss']
})
export class AdminSettingPaymentUpdateComponent implements OnInit {

	public options: Object = {
		placeholderText: 'Nhập nội dung chi tiết hình thức',
	}

	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	updatePayment() {
		alert("Đã cập nhật!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/setting/payment']);
	}


}
