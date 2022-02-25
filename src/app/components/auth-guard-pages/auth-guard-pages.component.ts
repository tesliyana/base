import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const languages = ['mk', 'sr'];

@Component({
	selector: 'app-auth-guard-pages',
	templateUrl: './auth-guard-pages.component.html',
	styleUrls: ['./auth-guard-pages.component.scss']
})
export class AuthGuardPagesComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {
		const url = this.router.url;
		if (url.split('/' + url.slice(1, 3) + '/')[0] == '') {
			const lang = url.slice(1, 3);
			if (url === '/') {
				this.router.navigate(['home']);
				// } else if (url.startsWith('/mk') && url.indexOf('#') == -1) {
			} else if (languages.indexOf(lang) != -1 && url.indexOf('#') == -1) {
				let redirectTo = window.document.location.origin + environment.baseFeUrl + url.slice(1, 3);

				if (!!url.split('/' + lang + '/')[1]) {
					redirectTo += '#' + url.split('/' + lang + '/')[1];
				}

				console.log('Redirect to:', redirectTo);

				window.document.location.href = redirectTo;
				//  '/base/mk/' + '#welcome';
			} else if (url.startsWith('/#')) {
				this.router.navigate([url.replace('#', '')]);
			}
		} else {
			console.log('Rarely reachable ELSE');
		}
	}
}
