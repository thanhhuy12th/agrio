import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
	selector: 'app-list-sub-website-account',
	templateUrl: './list-sub-website-account.component.html',
	styleUrls: ['./list-sub-website-account.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSubWebsiteAccountComponent implements OnInit {

	@Input('data') meals: string[] = [];
	page: number = 1;
	constructor(private router:Router) { 
		$(document).ready(function (){});

	}

	ngOnInit() {

	}

	gotoUpdate(id: number) {
		this.router.navigate(['super-admin/sub-website-account/update/'+id]);
	}
	confirmDelete(id: number) {
		$("#idSubWebsiteAccount").val(id);
		$('#deleteSubWebsiteAccount').modal('show');
	}
	deleteSubWebsiteAccount() {
		const id = $("#idSubWebsiteAccount").val();
		alert("đã xóa: " + id);
		$('#deleteSubWebsiteAccount').modal('hide');
	}

}
