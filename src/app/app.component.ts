import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	isOpen = true;

	toggle() {
		this.isOpen = !this.isOpen;
	}
	public ngOnInit() {}
}
