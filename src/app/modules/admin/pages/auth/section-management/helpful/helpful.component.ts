import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-helpful',
	templateUrl: './helpful.component.html',
	styleUrls: ['./helpful.component.scss']
})
export class HelpfulComponent implements OnInit {

	headerTitle: string = "Cập nhật section: Lợi ích";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
