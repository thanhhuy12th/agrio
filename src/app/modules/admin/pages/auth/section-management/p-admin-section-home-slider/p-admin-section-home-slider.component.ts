import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";

@Component({
	selector: 'app-p-admin-section-home-slider',
	templateUrl: './p-admin-section-home-slider.component.html',
	styleUrls: ['./p-admin-section-home-slider.component.scss']
})
export class PAdminSectionHomeSliderComponent implements OnInit {

	headerTitle: string = "Cập nhật section Home Slider";
	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
