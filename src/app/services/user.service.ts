import { Injectable } from '@angular/core';
import * as locationJson from "./location.json";

@Injectable({ providedIn: 'root' })
export class UserService {
    locations: any[] = (locationJson as any).default;
    constructor() {
        console.log(this.locations);
    }

    getStates() {
        return this.locations.map((l) => l.State.Name).sort();
    }

    getCities(state:string){
        return this.locations.find(s=>s.State.Name==state).State.Cities;
    }

    getSkills(){
        return ["C#","ASP.Net","Javascript","Angular","HTML","CSS"];
    }

}