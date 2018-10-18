import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any
@Component({
	selector: 'app-add-sub-website',
	templateUrl: './add-sub-website.component.html',
	styleUrls: ['./add-sub-website.component.scss']
})
export class AddSubWebsiteComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {

	}

	addSubWebsite() {
		alert("Đã thêm!");
	}

	onBack() {
		this.router.navigate(['super-admin/sub-website']);
	}

}
