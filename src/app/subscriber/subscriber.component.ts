import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../services/account.services'


@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})

export class SubscriberComponent implements OnInit {
  productid:String="";
  productname:String="";
  accountsServiceRef:AccountsService;
  
 

  constructor(accountServiceRef:AccountsService) {
    this.accountsServiceRef=accountServiceRef;
   } 

  ngOnInit(): void {
  
  }

  AddProduct()
  {
    let product={ProductId:this.productid,ProductName:this.productname};
     let observableStream=this.accountsServiceRef.addproducts(product);
     //observe
     observableStream.subscribe(
      (data:any)=>{
        window.alert("New product has been added")
        console.log(data);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("Request completed")
      });
  }


  addFile(): void {
    const selectedFileList = (<HTMLInputElement>document.getElementById('myFile')).files; 
    const fileToUpload = selectedFileList.item(0);
        this.accountsServiceRef
            .upload(fileToUpload)
            .subscribe(res => {
                console.log(res);
            });
    


}

}
