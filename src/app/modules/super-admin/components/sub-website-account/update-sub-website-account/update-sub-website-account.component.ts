import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any

@Component({
	selector: 'app-update-sub-website-account',
	templateUrl: './update-sub-website-account.component.html',
	styleUrls: ['./update-sub-website-account.component.scss']
})
export class UpdateSubWebsiteAccountComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {

	}

	updateSubWebsiteAccount() {
		alert("Đã cập nhật!");
	}

	onBack() {
		this.router.navigate(['super-admin/sub-website-account']);
	}


}
