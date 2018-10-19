import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";

@Component({
	selector: 'app-p-admin-section-helpful',
	templateUrl: './p-admin-section-helpful.component.html',
	styleUrls: ['./p-admin-section-helpful.component.scss']
})
export class PAdminSectionHelpfulComponent implements OnInit {

	headerTitle: string = "Cập nhật section Helpful";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
