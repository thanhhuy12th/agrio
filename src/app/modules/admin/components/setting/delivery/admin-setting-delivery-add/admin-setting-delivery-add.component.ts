import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-setting-delivery-add',
	templateUrl: './admin-setting-delivery-add.component.html',
	styleUrls: ['./admin-setting-delivery-add.component.scss']
})
export class AdminSettingDeliveryAddComponent implements OnInit {

	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	addDelivery() {
		alert("Đã thêm!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/setting/delivery']);
	}

}
