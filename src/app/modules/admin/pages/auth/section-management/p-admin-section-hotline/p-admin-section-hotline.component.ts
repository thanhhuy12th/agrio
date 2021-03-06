import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-p-admin-section-hotline',
	templateUrl: './p-admin-section-hotline.component.html',
	styleUrls: ['./p-admin-section-hotline.component.scss']
})
export class PAdminSectionHotlineComponent implements OnInit {

	headerTitle: string = "Cập nhật section Hotline";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
