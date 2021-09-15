import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { SearchComponent } from './header/search.component';
import { TopNavBarComponent} from './header/top-nav-bar.component';
import { TopNavButtons } from './header/top-nav-buttons.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { SideNavBarComponent } from './sidebar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    FeedComponent,
    SideNavBarComponent,
    LayoutMainComponent,
    SearchComponent,
    TopNavButtons
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
