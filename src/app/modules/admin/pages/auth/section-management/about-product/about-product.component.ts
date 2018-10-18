import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-about-product',
	templateUrl: './about-product.component.html',
	styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {

	headerTitle: string = "Cập nhật section: About Product";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}


}
