import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-auth-guard-pages',
	templateUrl: './auth-guard-pages.component.html',
	styleUrls: ['./auth-guard-pages.component.scss']
})
export class AuthGuardPagesComponent implements OnInit {
	constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

	ngOnInit(): void {
		let url = this.router.url;
		if (url === '/') {
			this.router.navigate(['/home']);
		} else if (url.startsWith('/mk')) {
			console.log('Redirect to:', this.document.location.href);
			// this.router.navigate([url]);
			this.document.location.href = this.document.location.href;
		}
	}
}
