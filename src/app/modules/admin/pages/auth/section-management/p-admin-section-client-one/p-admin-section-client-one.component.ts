import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";

@Component({
	selector: 'app-p-admin-section-client-one',
	templateUrl: './p-admin-section-client-one.component.html',
	styleUrls: ['./p-admin-section-client-one.component.scss']
})
export class PAdminSectionClientOneComponent implements OnInit {

	headerTitle: string = "Cập nhật section Client one";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
