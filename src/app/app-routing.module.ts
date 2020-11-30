import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {'path' : 'example' , 'component':ExampleComponent},
  {'path' : '' , 'component': HomeComponent},
  {'path' : 'contact' , 'component': ContactComponent},
  {'path' : 'about' , 'component': AboutComponent},
  {'path' : 'auth' , 'component': AuthenticationComponent},
  {'path' : 'room-booking-request' , 'component': RoomBookingRequestComponent},
  {'path' : 'feedback' , 'component': FeedbackComponent},
  {'path' : 'logout' , 'component': LogoutComponent},
  {'path' : 'userprofile' , 'component': UserprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
