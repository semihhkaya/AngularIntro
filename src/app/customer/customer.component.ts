import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{

  customers:Customer[] = []
  selectedCustomer:Customer;
  @Input() city:string; //Ben city değerini üst komponentten almaya çalışıyorum demek.

  ngOnInit(){
    this.customers = [
      {id:1,firstName:"Semih",lastName:"Kaya",age:21},
      {id:1,firstName:"Semih",lastName:"Haya",age:22},
      {id:1,firstName:"Semih",lastName:"Yaka",age:25},
      {id:1,firstName:"Semih",lastName:"Saka",age:24}
    ]
  }

  selectCustomer(customer:Customer){
    this.selectedCustomer = customer;
  }

  

}
