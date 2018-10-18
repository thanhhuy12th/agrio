import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-product-list',
	templateUrl: './admin-product-list.component.html',
	styleUrls: ['./admin-product-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminProductListComponent implements OnInit {

	@Input('data') meals: string[] = [];
	page: number = 1;
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(function (){});
	}

	ngOnInit() {

	}

	gotoUpdate(id: number) {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl+'/product/update/'+id]);
	}
	confirmDelete(id: number) {
		$("#idProduct").val(id);
		$('#deleteProduct').modal('show');
	}
	deleteProduct() {
		const id = $("#idProduct").val();
		alert("đã xóa: " + id);
		$('#deleteProduct').modal('hide');
	}

}
