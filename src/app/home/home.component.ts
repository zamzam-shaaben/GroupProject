import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from  '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 contectForm:FormGroup;
  base_url="http://localhost:8080/tutorial/angular-laravel-project/";
  
  constructor(private fb:FormBuilder , private http:HttpClient) {
    this.contectForm=fb.group({
      name:'',
      email:'',
      mobile_no:'',
      message:''

    });
   }

  ngOnInit(): void {
    }

  save_contact(contectForm:any)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type' ,'multipart/form-data');
    headers.append('Accept' ,'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'public/api/contect_form' , contectForm.value , options).subscribe((data)=>{
      this.contectForm.reset();
      alert('Contact Query Successfully Send');
    });
  
 
  console.log(contectForm.value);
}

}


