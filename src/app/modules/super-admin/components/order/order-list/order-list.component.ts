import { Component, OnInit,  ChangeDetectionStrategy, Input} from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
	selector: 'app-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit {

	@Input('data') meals: string[] = [];
	page: number = 1;
	constructor(private router:Router) { 
		$(document).ready(function (){});

	}

	ngOnInit() {

	}

	gotoDetail(id: number) {
		this.router.navigate(['super-admin/order/'+id]);
	}
	confirmDelete(id: number) {
		$("#idOrder").val(id);
		$('#deleteOrder').modal('show');
	}
	deleteOrder() {
		const id = $("#idOrder").val();
		alert("đã xóa: " + id);
		$('#deleteOrder').modal('hide');
	}

}
