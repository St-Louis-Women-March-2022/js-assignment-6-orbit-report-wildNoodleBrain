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

	count(catergory: string): number {
		if (catergory === 'Total') {
			return this.satellites.length;
		}else {
			let count: number = 0;
			for (let i in this.satellites) {
				if (this.satellites[i].type === catergory) {
					count ++;
				}
			}
		
		return count;
	}

}}

	
		/*let count: number = 0;
		if (this.satellites) {
			for (let i = 0; i < this.satellites.length; i++) {
				if (this.satellites[i].type.toLowerCase === value.toLowerCase) {
					count += 1
				*/
				/*count(catergory: string): number {
		if (catergory === 'Total') {
			return this.satellites.length;
		}else {
			let count: number = 0;
			for (let i in this.satellites) {
				if (this.satellites[i].type === catergory) {
					count ++;*/