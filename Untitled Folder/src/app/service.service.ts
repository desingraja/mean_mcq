import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseurl:String='http://localhost:9000';
  
  constructor(private http:HttpClient) { }

  register(uname,unamelast,mail,psw)
  {
   
    const abc={
      uname:uname,
      unamelast:unamelast,
      mail:mail,
      psw:psw,
      
      // name:"uname",
      // mail:"mail",
      // psw:"pwd"
    };
    console.log("abc data :"+abc);
    return this.http.post(this.baseurl+'/create',abc);

  }
  registe(uname,uid,mail,psw)
  {
   
    const abc={
      name:uname,
      uid:uid,
      mail:mail,
      psw:psw,
      
      // name:"uname",
      // mail:"mail",
      // psw:"pwd"
    };
    console.log("abc data :"+abc);
    return this.http.post(this.baseurl+'/create',abc);

  }
  logging(uname,psw)
  {
    const bcd={
      name:uname,
      pwd:psw,
    };
    return this.http.post(this.baseurl+'/create',bcd);
  }
  
  customers(uname,id,psw)
  {
    const bcd={
      name:uname,
      id:id,
      pwd:psw,
    };
    return this.http.post(this.baseurl+'/create',bcd);
  }

  customering(uname,id,psw)
  {
    const def={
      name:uname,
      id:id,
      psw:psw
    }
    return this.http.post(this.baseurl+'/create',def);
  }

  ngOnInit(){
    
  }
}
