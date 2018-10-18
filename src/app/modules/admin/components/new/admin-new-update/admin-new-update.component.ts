import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-new-update',
	templateUrl: './admin-new-update.component.html',
	styleUrls: ['./admin-new-update.component.scss']
})
export class AdminNewUpdateComponent implements OnInit {

	imgUrl: string = "http://via.placeholder.com/350x350";

	public options: Object = {
		placeholderText: 'Nhập nội dung chi tiết của tin tức',
	}
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	updateNew() {
		alert("Đã cập nhật!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/new']);
	}

}
