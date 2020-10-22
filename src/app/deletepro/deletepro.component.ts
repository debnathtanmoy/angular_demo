import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../services/account.services'

@Component({
  selector: 'app-deletepro',
  templateUrl: './deletepro.component.html',
  styleUrls: ['./deletepro.component.css']
})
export class DeleteproComponent implements OnInit {
  productid:String="";
  productname:String="";
  accountsServiceRef:AccountsService;

  

  constructor(accountServiceRef:AccountsService) {
    this.accountsServiceRef=accountServiceRef;
   } 

  ngOnInit(): void {
  }

  DeleteProduct()
  {
    let product={ProductId:this.productid,ProductName:this.productname};
     let observableStream=this.accountsServiceRef.deleteproducts(product);
     //observe
     observableStream.subscribe(
      (data:any)=>{
        window.alert("Product has been deleted")
        console.log(data);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("User data deleted")
      });
  }


}

