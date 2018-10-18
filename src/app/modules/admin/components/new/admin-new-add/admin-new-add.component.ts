import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-new-add',
	templateUrl: './admin-new-add.component.html',
	styleUrls: ['./admin-new-add.component.scss']
})
export class AdminNewAddComponent implements OnInit {

	imgUrl: string = "http://via.placeholder.com/350x350";

	public options: Object = {
		placeholderText: 'Nhập nội dung chi tiết của tin tức',
	}
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	addNew() {
		alert("Đã thêm!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/new']);
	}

}
