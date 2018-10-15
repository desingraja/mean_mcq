import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service'
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { unwrapResolvedMetadata } from '@angular/compiler';

@Component({
  selector: 'app-meanstack',
  templateUrl: './meanstack.component.html',
  styleUrls: ['./meanstack.component.css']
})
export class MeanstackComponent implements OnInit {

  create:FormGroup;
 
  public array:any=[];
  constructor(private ab:ServiceService,private c:FormBuilder){  }
  print(uname,unamelast,mail,psw)
  {

    console.log(uname+" "+unamelast+" "+mail+" "+psw);
     this.ab.register(uname,unamelast,mail,psw).subscribe((data)=>{
    
    //   // this.array=data['main'];
       console.log(data);
       alert("Submitted : Go and view in Db");

  })
  alert("Account created");
  }
  login(uname,psw)
  {

    console.log(uname+" "+psw);
    this.ab.logging(uname,psw).subscribe(function(data)
  {
    
    console.log(data);
  })
  }
   det:any=[];

    pri(){
      document.getElementById("signup").style.display="none";

    }
    open(){
      document.getElementById("content").style.display="block";
      document.getElementById("loginid").style.display="none";
      document.getElementById("signup").style.display="none";

    }
    Profile(){
      document.getElementById("navbarNav").style.display="none";
    }
  ngOnInit(){
    // this.det.push(uname,mail,psw)
    document.getElementById("btnid").style.display="show";
  }
}