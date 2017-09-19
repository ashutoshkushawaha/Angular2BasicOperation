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
//import { HEROES } from './mock-heroes';
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'Test/GetHeroes'; // URL to web api
        this.baseUrl = 'http://swapi.co/api';
    }
    HeroService.prototype.getAll = function () {
        var people$ = this.http
            .get(this.baseUrl + "/people", { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return people$;
    };
    HeroService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    //getHeroes(): Promise<Hero[]> {
    //    return Promise.resolve(HEROES);
    //}
    //getHeroesSlowly(): Promise<Hero[]> {
    //    return new Promise(resolve => {
    //        // Simulate server latency with 2 second delay
    //        setTimeout(() => resolve(this.getHeroes()), 2000);
    //    });
    //}
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.getAllMap = function () {
        var people$ = this.http
            .get("" + this.heroesUrl, { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return people$;
    };
    //getHero(id: number): Promise<Hero> {
    //    const url = `${this.heroesUrl}/${id}`;
    //    return this.http.get(url)
    //        .toPromise()
    //        .then(response => response.json().data as Hero)
    //        .catch(this.handleError);
    //}
    HeroService.prototype.delete = function (id) {
        var url = 'Test/Delete' + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.createPerson = function (person) {
        return this.http
            .post(this.heroesUrl, JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
function mapPersons(response) {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');
    // The response of the API has a results
    // property with the actual results
    return response.json().data.map(toPerson);
}
function toPerson(r) {
    var heros = ({
        id: r.id,
        //  url: r.url,
        name: r.name,
    });
    console.log('Parsed person:', heros);
    return heros;
}
// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData) {
    var extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
    return parseInt(extractedId);
}
function mapPerson(response) {
    // toPerson looks just like in the previous example
    return toPerson(response.json());
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sofisticated
    var errorMsg = error.message || "Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=hero.service.js.map