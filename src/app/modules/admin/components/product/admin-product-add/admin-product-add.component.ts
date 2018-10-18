import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any
@Component({
	selector: 'app-admin-product-add',
	templateUrl: './admin-product-add.component.html',
	styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent implements OnInit {

	imgUrl: string = "http://via.placeholder.com/350x350";

	public options: Object = {
		placeholderText: 'Nhập nội dung chi tiết của sản phẩm',
	}
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	addProduct() {
		alert("Đã thêm!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/product']);
	}

}
