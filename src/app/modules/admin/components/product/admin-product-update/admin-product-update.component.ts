import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any
@Component({
	selector: 'app-admin-product-update',
	templateUrl: './admin-product-update.component.html',
	styleUrls: ['./admin-product-update.component.scss']
})
export class AdminProductUpdateComponent implements OnInit {

	imgUrl: string = "http://via.placeholder.com/350x350";

	public options: Object = {
		placeholderText: 'Nhập nội dung chi tiết của sản phẩm',
	}
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(() => {})
	}

	ngOnInit() {

	}

	updateProduct() {
		alert("Đã cập nhật!");
	}

	onBack() {
		this.router.navigate([this.stringLib.convertAdminUrl(this.router.url) + '/product']);
	}

}
