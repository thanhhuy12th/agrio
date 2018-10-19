import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-setting-delivery-update',
	templateUrl: './admin-setting-delivery-update.component.html',
	styleUrls: ['./admin-setting-delivery-update.component.scss']
})
export class AdminSettingDeliveryUpdateComponent implements OnInit {

	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	updateDelivery() {
		alert("Đã cập nhật!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/setting/delivery']);
	}

}
