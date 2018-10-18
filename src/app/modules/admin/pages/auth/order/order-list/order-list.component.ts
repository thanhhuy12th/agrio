import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OtherService } from "../../../../../../cores/service/other.service";
@Component({
	selector: 'app-admin-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

	headerTitle: string = "Danh sách đơn hàng";

	constructor(private router:Router, private activeRoute:ActivatedRoute, private otherService:OtherService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe((params) => {
			this.otherService.changeHeaderTitle(this.headerTitle);
		})
	}

}
