import {HttpClient} from '@angular/common/http'; 
import { Inject ,Injectable} from '@angular/core';

@Injectable()
export class AccountsService{

    httpClient:HttpClient;
    baseUrl:string;
    constructor(httpClient:HttpClient,@Inject('apiBaseAddress') baseUrl:string)
    {
        this.httpClient=httpClient;
        this.baseUrl=baseUrl;
        
    }

    addproducts(user)
    {
        let observableStream=this.httpClient.post(`${this.baseUrl}/api/Operations/add`,user);
        return observableStream;
    }

    updateproducts(user)
    {
        let observableStream=this.httpClient.put(`${this.baseUrl}/api/Operations/update/`+user.ProductId,user);
        return observableStream;
    }

    deleteproducts(user)
    {
        let observableStream=this.httpClient.delete(`${this.baseUrl}/api/Operations/delete/`+user.ProductId,user);
        return observableStream;
    }
 
    getProducts()
    {
        let observableStream=this.httpClient.get(`${this.baseUrl}/api/Operations/allproducts`);
        return observableStream;
    }

    sendemail(user)
    {
        console.log(user.emailid+" "+user.productId);
        let observableStream=this.httpClient.post(`${this.baseUrl}/api/Operations/sendemailsuccess`,user);
        return observableStream;
    }

    upload(fileToUpload: any) {
        let input = new FormData();
        input.append("file", fileToUpload);
    
        return this.httpClient
            .post(`${this.baseUrl}/api/Operations/addpic`, input);
    }

    getpic(productId:string)
    {
        let observableStream=this.httpClient.get(`${this.baseUrl}/api/Operations/getpic/`+productId);
        return observableStream;
    }
}