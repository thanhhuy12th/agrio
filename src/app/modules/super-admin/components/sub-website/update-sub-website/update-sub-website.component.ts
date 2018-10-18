import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-update-sub-website',
	templateUrl: './update-sub-website.component.html',
	styleUrls: ['./update-sub-website.component.scss']
})
export class UpdateSubWebsiteComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {
	}

	updateSubWebsite() {
		alert("Đã cập nhật!");
	}

	onBack() {
		this.router.navigate(['super-admin/sub-website']);
	}
}
