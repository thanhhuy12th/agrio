import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
	headerTitle: string;
	constructor(private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			const id = +params['id'];
			this.headerTitle = "Cập nhật website phụ mã: " + id;
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
