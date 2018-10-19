import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-p-admin-section-question',
	templateUrl: './p-admin-section-question.component.html',
	styleUrls: ['./p-admin-section-question.component.scss']
})
export class PAdminSectionQuestionComponent implements OnInit {

	headerTitle: string = "Cập nhật section Question";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
