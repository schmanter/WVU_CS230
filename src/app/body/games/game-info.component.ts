import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { GameInfo } from "./game-info.model";
import { GameInfoService } from "./game-service";

var data = [
    {
        picture: "https://image.api.playstation.com/vulcan/ap/rnd/202010/1512/8ThoZrE519SBuOMpYKFunYS0.png",
        title: "Apex Legends",
        followers: "315K followers",
    },
    {
        picture: "https://howlongtobeat.com/games/250px-Counter-Strike_Global_Offensive.jpg",
        title: "CSGO",
        followers: "615K followers",
    },
    {
        picture: "https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg",
        title: "Smash Ultimate",
        followers: "400 followers",
    }
]


@Component({
    selector: "game-info",
    templateUrl: "game-card.component.html"
})
export class GameInfoComponent implements OnInit {
    
    myInfo: GameInfo [] | undefined;
    constructor(private gameInfoService:GameInfoService) {

    }
    ngOnInit(): void {
        console.log("Registering showGameInfo as a subscriber");
        this.showGameInfo();
    }



    showGameInfo() {
        this.gameInfoService.getGameInfo().subscribe((data: GameInfo[]) => {
            console.log(data);
            for (var item in data) {
                console.log(data[item]);
            }
        })
    }
}