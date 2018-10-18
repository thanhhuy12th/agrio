import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringLibary } from '../../../../cores/lib/string';
@Component({
	selector: 'app-admin-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router, public stringLib:StringLibary) { }

	ngOnInit() {
	}

	handleLogin() {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl]);
	}
}
