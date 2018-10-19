import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-p-admin-section-guild',
	templateUrl: './p-admin-section-guild.component.html',
	styleUrls: ['./p-admin-section-guild.component.scss']
})
export class PAdminSectionGuildComponent implements OnInit {

	headerTitle: string = "Cập nhật section Guild";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
