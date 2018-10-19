import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-setting-delivery-list',
	templateUrl: './admin-setting-delivery-list.component.html',
	styleUrls: ['./admin-setting-delivery-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSettingDeliveryListComponent implements OnInit {

	@Input('data') meals: string[] = [];
	page: number = 1;
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(function (){});
	}

	ngOnInit() {

	}

	gotoUpdate(id: number) {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl+'/setting/delivery/update/'+id]);
	}
	confirmDelete(id: number) {
		$("#idDelivery").val(id);
		$('#deleteDelivery').modal('show');
	}
	deleteDelivery() {
		const id = $("#idDelivery").val();
		alert("đã xóa: " + id);
		$('#deleteDelivery').modal('hide');
	}



}
