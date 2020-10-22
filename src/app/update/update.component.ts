import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../services/account.services'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productid:String="";
  productname:String="";
  accountsServiceRef:AccountsService;

  constructor(accountServiceRef:AccountsService) {
    this.accountsServiceRef=accountServiceRef;
   } 

  ngOnInit(): void {
  }

  UpdateProduct()
  {
    let product={ProductId:this.productid,ProductName:this.productname};
     let observableStream=this.accountsServiceRef.updateproducts(product);
     //observe
     observableStream.subscribe(
      (data:any)=>{
        window.alert("Product details has been updated")
        data.productid = this.productid;
        data.productname = this.productname;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("User data updated");
      });
  }


}
