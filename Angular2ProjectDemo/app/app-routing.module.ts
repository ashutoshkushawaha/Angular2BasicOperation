import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ActorDetailComponent } from './actor-detail.component';
import { VoteTakerComponent } from './votetaker.component';
import { CountryListComponent } from './countrylistcomponent';
//import { StudentComponent } from './studentcomponent';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'actordeail', component: ActorDetailComponent },
    { path: 'voteTaker', component: VoteTakerComponent },
    { path: 'cascading', component: CountryListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
