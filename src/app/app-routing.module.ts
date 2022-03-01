import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardPagesComponent } from './components/auth-guard-pages/auth-guard-pages.component';
import { TerminalComponent } from './components/terminal/terminal/terminal.component';
import { WelcomeComponent } from './components/terminal/welcome/welcome.component';

const routes: Routes = [
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: 'home',
		component: TerminalComponent
	},
	// {
	// 	path: '',
	// 	component: AuthGuardPagesComponent,
	// 	// children: AuthGuardRoutes,
	// 	// canActivate: [AuthGuard],
	// 	data: { title: 'Auth Guard Pages' }
	// },
	// { path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: AuthGuardPagesComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			paramsInheritanceStrategy: 'always',
			// enableTracing: true
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
