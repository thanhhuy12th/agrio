import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-product-update',
	templateUrl: './product-update.component.html',
	styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

	headerTitle: string;
	constructor(private router:Router, private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			const id = +params['id'];
			this.headerTitle = "Cập nhật sản phẩm: " + id;
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
