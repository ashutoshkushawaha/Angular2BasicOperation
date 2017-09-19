import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Person } from './person';

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'Test/GetHeroes';  // URL to web api
    private baseUrl: string = 'http://swapi.co/api';
    constructor(private http: Http) { }

    getAll(): Observable<Person[]> {
        let people$ = this.http
            .get(`${this.baseUrl}/people`, { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return people$;
    }
    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }


    //getHeroes(): Promise<Hero[]> {
    //    return Promise.resolve(HEROES);
    //}

    //getHeroesSlowly(): Promise<Hero[]> {
    //    return new Promise(resolve => {
    //        // Simulate server latency with 2 second delay
    //        setTimeout(() => resolve(this.getHeroes()), 2000);
    //    });
    //}

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);


    }

    getAllMap(): Observable<Hero[]> {
        let people$ = this.http
            .get(`${this.heroesUrl}`, { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return people$;
    }

    //getHero(id: number): Promise<Hero> {
    //    const url = `${this.heroesUrl}/${id}`;
    //    return this.http.get(url)
    //        .toPromise()
    //        .then(response => response.json().data as Hero)
    //        .catch(this.handleError);
    //}

    delete(id: number): Promise<void> {
        const url = `${'Test/Delete'}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    createPerson(person: Person): Promise<Person> {
        return this.http
            .post(this.heroesUrl, JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
function mapPersons(response: Response): Hero[] {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().data.map(toPerson)
}

function toPerson(r: any): Hero {
    let heros = <Hero>({
        id: r.id,
        //  url: r.url,
        name: r.name,
        //  weight: r.mass,
        // height: r.height,
    });
    console.log('Parsed person:', heros);
    return heros;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData: any) {
    let extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
    return parseInt(extractedId);
}

function mapPerson(response: Response): Hero {
    // toPerson looks just like in the previous example
    return toPerson(response.json());
}

// this could also be a private method of the component class
function handleError(error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}

