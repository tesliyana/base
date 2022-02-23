import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth-guard-pages',
	templateUrl: './auth-guard-pages.component.html',
	styleUrls: ['./auth-guard-pages.component.scss']
})
export class AuthGuardPagesComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {
		let url = this.router.url;
		if (url === '/') {
			this.router.navigate(['/home']);
		} else {
			console.log('Redirect to:', url);
			this.router.navigate([url]);
		}
	}
}
