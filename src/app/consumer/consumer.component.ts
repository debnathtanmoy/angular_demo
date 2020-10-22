import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../services/account.services'
import {Router} from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Inject ,Injectable} from '@angular/core';



@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})

export class ConsumerComponent implements OnInit {
  accountsServiceRef:AccountsService;
  datacomp:any="";
  emailid:string="";
  productid:string="";
  Location:string="";
  value:any=[];

  baseUrl:string;
  object:{[key:string]:string} ={};

  constructor(accountServiceRef:AccountsService,private route:Router,@Inject('apiBaseAddress') baseUrl:string) {
    this.accountsServiceRef=accountServiceRef;
    this.baseUrl=baseUrl;
    
   } 

  ngOnInit(): void {
  }

  getProducts()
  {
    
    console.log("call function");
    let observableStream=this.accountsServiceRef.getProducts();
    observableStream.subscribe(
      (data:any)=>{
        window.alert("Getting the list of products")
        this.object=data;
        console.log(this.object);
        for (var i=0;i<data.length;i++)
        {
          this.value.push(`${this.baseUrl}/api/Operations/getpic/`+data[i].productId)
        }
        
        
      

        
        
        
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("User data updated");
      });
  }

  openForm()
  {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  detailssubmitted(){
    let product={emailid:this.emailid,productId:this.productid};
    let observableStream=this.accountsServiceRef.sendemail(product);
    observableStream.subscribe(
      (data:any)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("User data updated");
      });
      window.alert("Thanks for selecting Philips! Check your mail");

  }

  getpic()
  {
    let observableStream=this.accountsServiceRef.getpic("001");
    observableStream.subscribe(
      (data:any)=>{
        window.alert("Get all the pic list")
        this.object=data;
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("User pic data updated");
      });
  }

}
