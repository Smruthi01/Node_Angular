import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  longText = `A comfortable luxury living suite.`;

  //hotel!:Hotel[];
  // constructor(private httpclient:HttpClient,private router:Router,public id:number,
  //   public location:string,
  //   public hotelname:string,
  //   public rating:number,
  //   public singlebed:number,
  //   public image:string,
  //   public doublebed:number,
  //   public deluxe:number) { }
   ngOnInit(): void {
   // this.hoteldata() 
  
  }
  // hoteldata(){
  //   const location =localStorage.getItem("location")
  //   this.httpclient.get<any>("http://localhost:9000/hotel/"+location)
  //   .subscribe(
  //     response=>{
  //       console.log(response);
  //       this.hotel=response;
  //     }
  //   )

  // }

  // booking(hotelvalue:any){
  //   localStorage.setItem('hotelname',""+hotelvalue.hotelname)
  //   localStorage.setItem('singlebed',""+ hotelvalue.singlebed)
  //   localStorage.setItem('doublebed',""+ hotelvalue.doublebed)
  //   localStorage.setItem('deluxe',""+ hotelvalue.deluxe)
  //   localStorage.setItem('hotellocation',""+hotelvalue.hotellocation)
  //   this.router.navigate(['booking'])
  // }

 
}

