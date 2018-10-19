import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-p-admin-section-feature',
	templateUrl: './p-admin-section-feature.component.html',
	styleUrls: ['./p-admin-section-feature.component.scss']
})
export class PAdminSectionFeatureComponent implements OnInit {

	headerTitle: string = "Cập nhật section Feature";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
