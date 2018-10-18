import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-client-comment-two',
	templateUrl: './client-comment-two.component.html',
	styleUrls: ['./client-comment-two.component.scss']
})
export class ClientCommentTwoComponent implements OnInit {

	headerTitle: string = "Cập nhật section: Nhận xét khách hàng 2";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
