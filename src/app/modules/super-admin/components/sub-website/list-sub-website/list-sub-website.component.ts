import { Component, OnInit,  ChangeDetectionStrategy, Input} from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
	selector: 'app-list-sub-website',
	templateUrl: './list-sub-website.component.html',
	styleUrls: ['./list-sub-website.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSubWebsiteComponent implements OnInit {
	@Input('data') meals: string[] = [];
	page: number = 1;
	constructor(private router:Router) { 
		$(document).ready(function (){});

	}

	ngOnInit() {

	}

	gotoUpdate(id: number) {
		this.router.navigate(['super-admin/sub-website/update/'+id]);
	}
	confirmDelete(id: number) {
		$("#idSubWebsite").val(id);
		$('#deleteSubWebsite').modal('show');
	}
	deleteSubWebsite() {
		const id = $("#idSubWebsite").val();
		alert("đã xóa: " + id);
		$('#deleteSubWebsite').modal('hide');
	}
}
