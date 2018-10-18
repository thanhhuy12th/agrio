import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-new-update',
	templateUrl: './new-update.component.html',
	styleUrls: ['./new-update.component.scss']
})
export class NewUpdateComponent implements OnInit {

	headerTitle: string;

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			const id = +params['id'];
			this.headerTitle = "Cập nhật tin tức: " + id;
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
