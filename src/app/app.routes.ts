import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {path : 'Home',component : HomeComponent},
    {path : 'About', component : AboutComponent},
    {path : 'Student', component: StudentComponent}
];
