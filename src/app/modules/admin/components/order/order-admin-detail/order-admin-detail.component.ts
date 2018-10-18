import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-order-admin-detail',
	templateUrl: './order-admin-detail.component.html',
	styleUrls: ['./order-admin-detail.component.scss']
})
export class OrderAdminDetailComponent implements OnInit {

	isUndoPayment: boolean = false;
	isUndoDelivery: boolean = false;
	constructor(private router:Router, public stringLib:StringLibary) { 
		$(document).ready(function (){});
	}

	ngOnInit() {
	}

	showUpdateCustomer() {
		$('#updateCustomer').modal('show');
	}

	onBack() {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl+'/order'])
	}

}
