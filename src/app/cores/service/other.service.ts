import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OtherService {
	// Header Title
	private headerTitle = new BehaviorSubject('default title');
	currentheaderTitle= this.headerTitle.asObservable();
	// Sub Website name
	private subWebsiteName = new BehaviorSubject('default name');
	currentSubWebsiteName= this.subWebsiteName.asObservable();
	constructor() { }

	// Header Title
	changeHeaderTitle(title: string) {
		this.headerTitle.next(title);
	}
	// Sub Website name
	changeSubWebsiteName(name: string) {
		this.subWebsiteName.next(name);
	}
}
