import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-p-admin-section-about-product',
	templateUrl: './p-admin-section-about-product.component.html',
	styleUrls: ['./p-admin-section-about-product.component.scss']
})
export class PAdminSectionAboutProductComponent implements OnInit {

	headerTitle: string = "Cập nhật section About us";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
