import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../cores/lib/string';
@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

	constructor(private router:Router, public stringLib:StringLibary) { }

	ngOnInit() {
	}
	changePassword() {
		alert("Đã thay đổi!");
	}

	onBack() {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl]);
	}
}
