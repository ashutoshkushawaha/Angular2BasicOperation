"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var country_1 = require("./country");
var state_1 = require("./state");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getCountries = function () {
        return [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia')
        ];
    };
    DataService.prototype.getStates = function () {
        return [
            new state_1.State(1, 1, 'Arizona'),
            new state_1.State(2, 1, 'Alaska'),
            new state_1.State(3, 1, 'Florida'),
            new state_1.State(4, 1, 'Hawaii'),
            new state_1.State(5, 2, 'Gujarat'),
            new state_1.State(6, 2, 'Goa'),
            new state_1.State(7, 2, 'Punjab'),
            new state_1.State(8, 3, 'Queensland'),
            new state_1.State(9, 3, 'South Australia'),
            new state_1.State(10, 3, 'Tasmania')
        ];
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=dataservice.js.map