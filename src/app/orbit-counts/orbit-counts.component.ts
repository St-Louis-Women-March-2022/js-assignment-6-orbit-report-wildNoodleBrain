import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
	selector: 'app-orbit-counts',
	templateUrl: './orbit-counts.component.html',
	styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];
	catergories: string[] = ['Total', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

	constructor() { }

	ngOnInit() {
	}

	count(value: string): number {
		let count: number = 0;
		if (this.satellites) {
			for (let i = 0; i < this.satellites.length; i++) {
				if (this.satellites[i].type.toLowerCase === value.toLowerCase) {
					count += 1;
				}
			}
		}
		return count;
	}


}