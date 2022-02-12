import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalComponent } from './components/terminal/terminal/terminal.component';
import { WelcomeComponent } from './components/terminal/welcome/welcome.component';

const routes: Routes = [
	// {
	// 	path: '*',
	// 	redirectTo: '/home',
	// 	pathMatch: 'full'
	// },
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: 'home',
		component: TerminalComponent
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' }, 
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
