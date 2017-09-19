"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ActorDetailComponent = (function () {
    function ActorDetailComponent() {
        this.stringList = [];
        this.devices = 'one two three'.split(' ');
        this.selectedDevice = 'two';
    }
    ActorDetailComponent.prototype.onSubmit = function (abcd) {
        this.stringList.push(abcd);
        console.log(this.stringList);
        console.log('you submitted value:', abcd);
    };
    ActorDetailComponent.prototype.onDelete = function (company) {
        var index = this.stringList.indexOf(company, 0);
        if (index > -1) {
            this.stringList.splice(index, 1);
        }
        console.log("key is" + index);
        console.log(this.stringList);
    };
    ActorDetailComponent.prototype.onSubmits = function (form) {
        console.log('you submitted value:', this.stringList);
    };
    ActorDetailComponent.prototype.ngOnInit = function () {
        this.sku = 'asjit';
        this.stringList.push(this.sku);
    };
    ActorDetailComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedDevice = newValue;
    };
    return ActorDetailComponent;
}());
ActorDetailComponent = __decorate([
    core_1.Component({
        selector: 'demo-form-sku',
        template: "  \n<my-country-list></my-country-list>\n  <div class=\"ui raised segment\">  \n    <h2 class=\"ui header\">Demo Form: Sku</h2>  \n    <form #f=\"ngForm\"  \n          (ngSubmit)=\"onSubmits(f.value)\"  \n          class=\"ui form\">\n\n      <div class=\"field\">  \n        <label for=\"skuInput\">SKU</label>  \n        <input type=\"text\"  \n               id=\"skuInput\"  \n               placeholder=\"SKU\"  \n               name=\"sku\" [(ngModel)]=\"abcd\">  \n      <button (click)=\"onSubmit(abcd)\" class=\"ui button\">add</button>  \n\n      </div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>  \n\n    </form>\n  \n\n <ul>\n      <li  *ngFor=\" let company of stringList\">\n        {{ company }}      <button (click)=\"onDelete(company)\" class=\"ui button\">X</button>  \n\n      </li>\n    </ul>\n  </div>  \n \n\n     <table>\n<thead>\n\t\n\t\t<th>Name\n\t\t</th>\n\t<th>Action\n\t\t</th>\n\t\n\n</thead>\n\n<tbody>\n\t\n  <tr *ngFor=\"let company of stringList\">\n    <td>{{company }} \n\n    </td>\n   <td>\n  <button (click)=\"onDelete(company)\">X</button>\n </td>\n\n    </tr>\n</tbody>\n</table> \n\n<select [ngModel]=\"selectedDevice\" (ngModelChange)=\"onChange($event)\" name=\"sel2\">\n    <option [value]=\"i\" *ngFor=\"let i of devices\">{{i}}</option>\n</select>\n  "
    })
], ActorDetailComponent);
exports.ActorDetailComponent = ActorDetailComponent;
//# sourceMappingURL=actor-detail.component.js.map