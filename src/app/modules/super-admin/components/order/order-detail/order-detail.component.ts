import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
	selector: 'app-order-detail',
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
	isUndoPayment: boolean = false;
	isUndoDelivery: boolean = false;
	constructor() { 
		$(document).ready(function (){});
	}

	ngOnInit() {
	}

	showUpdateCustomer() {
		$('#updateCustomer').modal('show');
	}
}
