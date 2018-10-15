import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-arul',
  templateUrl: './arul.component.html',
  styleUrls: ['./arul.component.css']
})
export class ArulComponent implements OnInit {


  constructor(private service :ServiceService) { }
  // let details=[];

  printt(uname,uid,mail,psw)
  {
    this.service.registe(uname,uid,mail,psw).subscribe((data)=>
  {
    console.log(data);
  })
  }

  customers(uname,id,psw)
  {
    this.service.customering(uname,id,psw).subscribe((data)=>
  {
    console.log(data);
  })
  }
 click(){
   document.getElementById("custsignup").style.display="none";
 }
  ngOnInit() {
    
  }
 


}
