import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from  '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  signup_form:FormGroup;
  login_form:FormGroup;
  base_url="http://localhost:8080/tutorial/angular-laravel-project/";

  constructor(private fb:FormBuilder , private http:HttpClient , private router: Router) {
    let user_info=localStorage.getItem('user_session');
    if(user_info){
      this.router.navigate(['/']);
    }
    this.signup_form=fb.group({
      name:'',
      email:'',
      mobile_no:'',
      password:'',

    });
    this.login_form=fb.group({
      email:'',
      password:'',
    });

   }
  ngOnInit(): void {
  }

  login(login_form: any){

    const headers = new HttpHeaders();
    headers.append('Content-Type' ,'multipart/form-data');
    headers.append('Accept' ,'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'public/api/login',login_form.value , options).subscribe((data)=>{
      let resp1 =Array.from(Object.keys(data));
      {

      localStorage .setItem('user_session',resp1[2]);
      window.location.href="/";

      }
     
    });
  
  
  console.log(login_form.value);
  }

  signup( signup_form:any)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type' ,'multipart/form-data');
    headers.append('Accept' ,'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'public/api/signup',signup_form.value , options).subscribe((data)=>{
      this. signup_form.reset();
      alert('Account Created | Please Login ');
    });
  
 
  console.log( signup_form.value);
}




}
