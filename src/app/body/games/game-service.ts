import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { GameInfo } from "./game-info.model";




@Injectable({ providedIn: 'root' })

@Component({
    selector: 'game-service',
    templateUrl: "game-card.component.html"
})

export class GameInfoService {
    private baseUrl: string = 'https://medaltv-app-default-rtdb.firebaseio.com/';
    private myInfoEndpoint: string = 'games.json';

    constructor(private http: HttpClient) {

    }



    getGameInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<GameInfo[]>(this.baseUrl + this.myInfoEndpoint);
    }
}