import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-guild',
	templateUrl: './guild.component.html',
	styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {

	headerTitle: string = "Cập nhật section: Hướng dẫn";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
