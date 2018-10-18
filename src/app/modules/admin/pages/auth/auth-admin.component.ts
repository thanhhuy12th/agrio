import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtherService } from '../../../../cores/service/other.service';
import { StringLibary } from '../../../../cores/lib/string';
declare var $ :any;
@Component({
	selector: 'app-admin-auth',
	templateUrl: './auth-admin.component.html',
	styleUrls: ['./auth-admin.component.scss']
})
export class AuthComponent implements OnInit {

	constructor(private router:Router, public stringLib:StringLibary, private otherService:OtherService) { 
		$(document).ready(function () {
			$('#toggle-btn').on('click', function (e) {
				e.preventDefault();

				if ($(window).outerWidth() > 1194) {
					$('nav.side-navbar').toggleClass('shrink');
					$('.page').toggleClass('active');
				} else {
					$('nav.side-navbar').toggleClass('show-sm');
					$('.page').toggleClass('active-sm');
				}
			});
		});
	}

	ngOnInit() {
		this.otherService.changeSubWebsiteName("Tinh dầu chúc An Giang");
	}
	onLogout() {
		let newUrl = this.stringLib.convertAdminUrl(this.router.url);
		this.router.navigate([newUrl + "/login"]);
	}
}
