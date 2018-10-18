import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../../cores/lib/string';
declare var $:any;
@Component({
	selector: 'app-admin-new-list',
	templateUrl: './admin-new-list.component.html',
	styleUrls: ['./admin-new-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminNewListComponent implements OnInit {

	@Input('data') meals: string[] = [];
	page: number = 1;
	constructor(private router:Router, public stringLib: StringLibary) { 
		$(document).ready(function (){});
	}

	ngOnInit() {

	}

	gotoUpdate(id: number) {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl+'/new/update/'+id]);
	}
	confirmDelete(id: number) {
		$("#idNew").val(id);
		$('#deleteNew').modal('show');
	}
	deleteNew() {
		const id = $("#idNew").val();
		alert("đã xóa: " + id);
		$('#deleteNew').modal('hide');
	}

}
