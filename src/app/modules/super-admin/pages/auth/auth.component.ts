import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import "../../../../../assets/super-admin/vendor/popper.js/umd/popper.min.js";
import "../../../../../assets/super-admin/js/grasp_mobile_progress_circle-1.0.0.min.js";
import "../../../../../assets/super-admin/vendor/jquery.cookie/jquery.cookie.js";
import "../../../../../assets/super-admin/vendor/chart.js/Chart.min.js";
import "../../../../../assets/super-admin/vendor/jquery-validation/jquery.validate.min.js";
declare var $ :any;

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	headerTitle: string;

	constructor(private router:Router) { 

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
		
	}

	onLogout() {
		this.router.navigate(["super-admin/login"]);
	}

}
