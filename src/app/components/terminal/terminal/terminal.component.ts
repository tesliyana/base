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
	visibility = 'shown';

	constructor() {}

	public ngOnInit() {
		setInterval(() => {
			this.next();
			this.visibility = this.visibility == 'shown' ? 'hidden' : 'shown';
		}, 9000);
	}

	back() {
		if (this.selection > 1) this.selection = this.selection - 1;
	}

	next() {
		if (this.selection < 9 && this.play) {
			this.selection = this.selection + 1;
		}
	}
}
