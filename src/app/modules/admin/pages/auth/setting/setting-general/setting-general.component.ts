import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-setting-general',
	templateUrl: './setting-general.component.html',
	styleUrls: ['./setting-general.component.scss']
})
export class SettingGeneralComponent implements OnInit {

	headerTitle: string = "Cài đặt chung";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
