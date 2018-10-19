import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";

@Component({
	selector: 'app-p-admin-section-element',
	templateUrl: './p-admin-section-element.component.html',
	styleUrls: ['./p-admin-section-element.component.scss']
})
export class PAdminSectionElementComponent implements OnInit {

	headerTitle: string = "Cập nhật section Element";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
