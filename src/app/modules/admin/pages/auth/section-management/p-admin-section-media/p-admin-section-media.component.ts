import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-p-admin-section-media',
	templateUrl: './p-admin-section-media.component.html',
	styleUrls: ['./p-admin-section-media.component.scss']
})
export class PAdminSectionMediaComponent implements OnInit {

	headerTitle: string = "Cập nhật section Media";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
