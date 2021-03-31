import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as locationJson from "./location.json";
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    locations: any[] = (locationJson as any).default;
    constructor(private http:HttpClient) {
        console.log(this.locations);
    }

    signUp(user:User){
        return this.http.post(`${environment.apiUrl}/SignUpUser`,user);
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