import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from  '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.css']
})
export class RoomBookingRequestComponent implements OnInit {
  booking_request: FormGroup;
  base_url="http://localhost:8080/tutorial/angular-laravel-project/";
  constructor(private fb:FormBuilder , private http:HttpClient) { 
    this.booking_request=fb.group({
      name:'',
      email:'',
      mobile_no:'',
      address:'',
      from_date:'',
      to_date:'',
      no_of_member:'',
      no_of_rooms:'',
      room_type:''
    });
  }

  ngOnInit(): void {
   // this.http.get(this.base_url+'public/api/get_room_type').subscribe((data)=>{
    // let resp1 =Array.from(Object.keys(data), k=>data[k]);
    //});
  }

  send_request(booking_request:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type' ,'multipart/form-data');
    headers.append('Accept' ,'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'public/api/room_booking_request' , booking_request.value , options).subscribe((data)=>{
      console.log(data);
    });


 }
}
