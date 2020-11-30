import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from  '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback_form:FormGroup;
  base_url="http://localhost:8080/tutorial/angular-laravel-project/";



  constructor(private fb:FormBuilder, private http:HttpClient) { 

    this.feedback_form=fb.group({
      name:'',
      email:'',
      mobile_no:'',
      feedback_type:'',
      message:''

    });
  }
  ngOnInit(): void {
    /*this.http.post(this.base_url+'public/api/contect_form' , feedback_form.value , options).subscribe((data)=>{
      console.log(data); */
  }
  save_feedback(feedback_form:any)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type' ,'multipart/form-data');
    headers.append('Accept' ,'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'public/api/save_feedback' , feedback_form.value , options).subscribe((data)=>{
      this.feedback_form.reset();
      alert('Contact Query Successfully Send');
    });
  
 
  console.log(feedback_form.value);
}

}
