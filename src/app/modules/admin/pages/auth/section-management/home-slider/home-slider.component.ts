import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-home-slider',
	templateUrl: './home-slider.component.html',
	styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

	headerTitle: string = "Cập nhật section: Home Slider";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}


}
