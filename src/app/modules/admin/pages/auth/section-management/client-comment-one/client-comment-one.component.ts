import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-client-comment-one',
	templateUrl: './client-comment-one.component.html',
	styleUrls: ['./client-comment-one.component.scss']
})
export class ClientCommentOneComponent implements OnInit {

	headerTitle: string = "Cập nhật section: Nhận xét khách hàng 1";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
