import { Component } from "@angular/core";
import { GamesCards } from "./games-cards-model";
import { mock_games } from "./mock-games";

@Component({
    selector: 'app-games-page',
    templateUrl: 'games-page.component.html',
    styleUrls: ["games-page.component.css"]
})
export class GamesPageComponent {
    games:GamesCards[] = [];

    constructor () {
        for (var games of mock_games) {
            this.games.push(new GamesCards(games));
        }
    }
}