export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;
	alternateColor: string = 'red';
	checkWarning: boolean = true;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	
isSpaceDebris():boolean {
	return this.type.toLowerCase() === "Space Debris"
	
}
}

// TODO 3a: fix isSpaceDebris check
