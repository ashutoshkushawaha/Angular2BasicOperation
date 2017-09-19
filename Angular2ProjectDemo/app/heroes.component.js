"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sweetalert2_1 = require("sweetalert2");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.Hero = {};
        this.people = [];
        this.errorMessage = '';
        this.isLoading = true;
        // person: Hero;
        this.professions = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
        // this.person = new Hero();
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getAllMap().subscribe(function (res) { return _this.heroes = res; });
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    HeroesComponent.prototype.savePersonDetails = function () {
        alert("form click is saved");
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
        //this.heroService
        //     .getAll()
        //     .subscribe(
        //  /* happy path */ p => this.people = p,
        //  /* error path */ e => this.errorMessage = e,
        //  /* onComplete */() => this.isLoading = false);
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.onclick = function (hero) {
        sweetalert2_1.default({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function () {
            sweetalert2_1.default('Deleted!', 'Your imaginary file has been deleted.', 'success');
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2_1.default('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
        //swal({
        //    title: 'Error!',
        //    text: 'Do you want to continue',
        //    type: 'error',
        //    confirmButtonText: 'Cool'
        //})
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-heroes',
        templateUrl: '/Test/HeroComponent',
        styleUrls: ['./heroes.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map