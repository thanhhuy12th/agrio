import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-p-admin-section-logo',
	templateUrl: './p-admin-section-logo.component.html',
	styleUrls: ['./p-admin-section-logo.component.scss']
})
export class PAdminSectionLogoComponent implements OnInit {

	headerTitle: string = "Cập nhật section Logo";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
