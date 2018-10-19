import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../../cores/lib/string';
declare var $:any;

@Component({
	selector: 'app-admin-setting-payment-list',
	templateUrl: './admin-setting-payment-list.component.html',
	styleUrls: ['./admin-setting-payment-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSettingPaymentListComponent implements OnInit {

	@Input('data') meals: string[] = [];
	page: number = 1;
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(function (){});
	}

	ngOnInit() {

	}

	gotoUpdate(id: number) {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl+'/setting/payment/update/'+id]);
	}
	confirmDelete(id: number) {
		$("#idPayment").val(id);
		$('#deletePayment').modal('show');
	}
	deletePayment() {
		const id = $("#idPayment").val();
		alert("đã xóa: " + id);
		$('#deletePayment').modal('hide');
	}

}
