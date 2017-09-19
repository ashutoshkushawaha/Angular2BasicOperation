import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { ActorDetailComponent } from './actor-detail.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';
import { DataService } from './dataservice';
import { CountryListComponent } from './countrylistcomponent';
//import { sweetalert2 } from 'sweetalert2';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
        
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        ActorDetailComponent,
        VoterComponent,
        VoteTakerComponent,
        CountryListComponent
        
    ],
    providers: [HeroService, DataService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
