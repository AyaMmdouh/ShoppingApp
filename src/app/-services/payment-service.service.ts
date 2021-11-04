import { Injectable } from '@angular/core';
import { Payment } from '../model/PaymentMethods.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentWays:Payment[];
  constructor() { 

    this.paymentWays=[
      {id:1,name:"Direct Bank Transfare"},
      {id:2,name:"Cheque Payment"},
      {id:3,name:"Paypal"},
      {id:4,name:"Visa"},
      {id:5,name:"Mastercard"},
      {id:6,name:"Meza"},
      {id:7,name:"On Dilivery"},
    ]
  }
  getAllMethods():Payment[]{
    return[...this.paymentWays]
  }
  getMethodById(id:number):Payment |undefined{
    const pay=this.paymentWays.find((p)=>p.id===id);
    return pay;
  }
}
