import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-setting-general',
	templateUrl: './admin-setting-general.component.html',
	styleUrls: ['./admin-setting-general.component.scss']
})
export class AdminSettingGeneralComponent implements OnInit {

	public optionContact: Object = {
		placeholderText: 'Nhập địa chỉ liên lạc',
	}
	public optionWorkHour: Object = {
		placeholderText: 'Nhập giờ làm việc',
	}
	public optionFooter: Object = {
		placeholderText: 'Trang trí footer',
	}
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {
	}

	updateSetting() {
		alert("Đã cập nhật!");
	}
}
