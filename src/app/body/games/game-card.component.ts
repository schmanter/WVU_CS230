import { Component, Input } from "@angular/core";
import {GameInfoComponent} from "./game-info.component";

@Component({
    selector: 'app-game-card',
    templateUrl: 'game-card.component.html',
    styleUrls: ["game-card.component.css"]
})

export class GameCard {

    @Input()
    picture! :string;
    @Input()
    title! :string;
    @Input()
    followers! :string;

}
