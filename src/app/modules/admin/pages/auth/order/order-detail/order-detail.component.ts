import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-order-detail',
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

	headerTitle: string;
	constructor(private router:Router, private activeRoute:ActivatedRoute,private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			const id = +params['id'];
			this.headerTitle = "Chi tiết đơn hàng: " + id;
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
