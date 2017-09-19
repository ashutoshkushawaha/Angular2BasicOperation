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
var dataservice_1 = require("./dataservice");
var country_1 = require("./country");
var CountryListComponent = (function () {
    function CountryListComponent(_dataService) {
        this._dataService = _dataService;
        this.selectedCountry = new country_1.Country(0, 'India');
        this.countries = this._dataService.getCountries();
    }
    CountryListComponent.prototype.onSelect = function (countryid) {
        this.states = this._dataService.getStates().filter(function (item) { return item.countryid == countryid; });
    };
    return CountryListComponent;
}());
CountryListComponent = __decorate([
    core_1.Component({
        selector: 'my-country-list',
        templateUrl: 'app/countrylistcomponent.html',
        providers: [dataservice_1.DataService]
    }),
    __metadata("design:paramtypes", [dataservice_1.DataService])
], CountryListComponent);
exports.CountryListComponent = CountryListComponent;
//# sourceMappingURL=countrylistcomponent.js.map