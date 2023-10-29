import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";  //import
@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any =[];
  data : any;
  expresponse : string="";
  constructor(private http : HttpClient){
  }
  getAllUsers(){
    this.http.get('http://localhost:8000/getAll').subscribe((response)=>{
      this.userList = response;
      console.log(this.userList);
    });
    return this.userList;
  }
  addUser(udata : any) :any{
    console.log(udata);
    console.log(udata.value);
    this.userList.push(udata.value);
    this.http.post('http://localhost:8000/insert',udata.value).subscribe((response)=>{
    this.expresponse=response.toString();  
    //console.log(response);
    });
    return this.expresponse;
  }
}

/*

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList: any[] = [];
  data: any;
  expresponse: string = "";

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8000/getAll');
  }

  addUser(udata: any): Observable<any> {
    return this.http.post('http://localhost:8000/insert', udata);
  }
}

*/