import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-terminal',
	animations: [
		trigger('visibility', [
			state(
				'show',
				style({
					opacity: 1
					// backgroundColor: 'yellow'
				})
			),
			state(
				'hidden',
				style({
					opacity: 0.69
					// backgroundColor: 'blue'
				})
			),
			transition('show => hidden', [animate('2s')]),
			transition('hidden => show', [animate('1s')])
			// transition('hidden => show', [animate('0.5s')])
		])
	],
	templateUrl: './terminal.component.html',
	styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
	selection = 1;
	play = true;
	isOpen = true;
	timer: number;

	constructor() {}

	public ngOnInit() {
		this.timer = window.setInterval(() => {
			if (this.play) {
				this.next();
			}
		}, 6000);
	}

	back() {
		if (this.selection > 1) this.selection = this.selection - 1;
	}

	next() {
		if (this.selection < 9) {
			this.selection = this.selection + 1;
		} else {
			clearInterval(this.timer);
		}
	}
}
