import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { default as swal } from 'sweetalert2';
//const swal = require('sweetalert2')
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Person } from './person';
@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: '/Test/HeroComponent',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    Hero = {}
    heroes: Hero[];
    people: Person[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;
    selectedHero: Hero;
    // person: Hero;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
    constructor(
        private router: Router,
        private heroService: HeroService) {
        // this.person = new Hero();
    }


    getHeroes(): void {
        this.heroService.getAllMap().subscribe(res => this.heroes = res);

        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);

    }

    savePersonDetails() {
        alert("form click is saved");
    }

    ngOnInit(): void {
        this.getHeroes();

        //this.heroService
        //     .getAll()
        //     .subscribe(
        //  /* happy path */ p => this.people = p,
        //  /* error path */ e => this.errorMessage = e,
        //  /* onComplete */() => this.isLoading = false);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    onclick(hero: Hero): void {

        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function () {
            swal(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
            )
        }, function (dismiss: any) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
        //swal({
        //    title: 'Error!',
        //    text: 'Do you want to continue',
        //    type: 'error',
        //    confirmButtonText: 'Cool'
        //})
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

}
