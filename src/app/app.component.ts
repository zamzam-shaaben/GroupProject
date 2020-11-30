import { Component } from '@angular/core';
import { FormGroup , FormBuilder} from  '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelManagement';
  custom_var ="My Angular Project";
  var2="Second Variable";
  user_info=localStorage.getItem('user_session');
  base_url="http://localhost:8080/tutorial/angular-laravel-project/";
  subscribeForm:FormGroup;

  constructor(private fb:FormBuilder , private http:HttpClient) {
    this.subscribeForm=fb.group({
      email:'',
    });
}
subscribe_now(subscribeForm:any){
  const headers = new HttpHeaders();
  headers.append('Content-Type' ,'multipart/form-data');
  headers.append('Accept' ,'application/json');
  let options={
    headers:headers,
  };

//console.log(subscribeForm.value);
this.http.post(this.base_url+'public/api/subscribe', subscribeForm.value , options).subscribe((data)=>{
  console.log(data);
});

}

}