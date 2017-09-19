import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-form-sku',

    template: `  
<my-country-list></my-country-list>
  <div class="ui raised segment">  
    <h2 class="ui header">Demo Form: Sku</h2>  
    <form #f="ngForm"  
          (ngSubmit)="onSubmits(f.value)"  
          class="ui form">

      <div class="field">  
        <label for="skuInput">SKU</label>  
        <input type="text"  
               id="skuInput"  
               placeholder="SKU"  
               name="sku" [(ngModel)]="abcd">  
      <button (click)="onSubmit(abcd)" class="ui button">add</button>  

      </div>

      <button type="submit" class="ui button">Submit</button>  

    </form>
  

 <ul>
      <li  *ngFor=" let company of stringList">
        {{ company }}      <button (click)="onDelete(company)" class="ui button">X</button>  

      </li>
    </ul>
  </div>  
 

     <table>
<thead>
	
		<th>Name
		</th>
	<th>Action
		</th>
	

</thead>

<tbody>
	
  <tr *ngFor="let company of stringList">
    <td>{{company }} 

    </td>
   <td>
  <button (click)="onDelete(company)">X</button>
 </td>

    </tr>
</tbody>
</table> 

<select [ngModel]="selectedDevice" (ngModelChange)="onChange($event)" name="sel2">
    <option [value]="i" *ngFor="let i of devices">{{i}}</option>
</select>
  `
})

export class ActorDetailComponent implements OnInit {
    sku: string;
    stringList = [];
    onSubmit(abcd: any): void {
        this.stringList.push(abcd);
        console.log(this.stringList);
        console.log('you submitted value:', abcd);
    }
    onDelete(company: string): void {
        var index = this.stringList.indexOf(company, 0);
        if (index > -1) {
            this.stringList.splice(index, 1);
        }
        console.log("key is" + index);
        console.log(this.stringList);
    }
    onSubmits(form: string): void {
        console.log('you submitted value:', this.stringList);

    }
    ngOnInit(): void {
        this.sku = 'asjit';
        this.stringList.push(this.sku);
    }
    devices = 'one two three'.split(' ');
    selectedDevice = 'two';
    onChange(newValue) {
        console.log(newValue);
        this.selectedDevice = newValue;
    }


}