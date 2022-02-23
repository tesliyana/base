import { Component, Inject, OnInit } from '@angular/core';
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
		} else if (url.startsWith('/mk') && url.indexOf('#') == -1) {
			console.log('Redirect to:', window.document.location.href);
			// this.router.navigate([url]);
			window.document.location.href = window.document.location.origin + '/mk/' + '#welcome';

			// window.document.location.href = window.document.location.href + '#1';
		} else if (url.startsWith('/mk')) {
			this.router.navigate(['/welcome']);
		}
	}
}
