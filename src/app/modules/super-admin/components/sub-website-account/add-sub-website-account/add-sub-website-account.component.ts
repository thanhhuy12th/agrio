import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any
@Component({
	selector: 'app-add-sub-website-account',
	templateUrl: './add-sub-website-account.component.html',
	styleUrls: ['./add-sub-website-account.component.scss']
})
export class AddSubWebsiteAccountComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {

	}

	addSubWebsiteAccount() {
		alert("Đã thêm!");
	}

	onBack() {
		this.router.navigate(['super-admin/sub-website-account']);
	}



}
