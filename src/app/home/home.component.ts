import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService,RoleApiResponse, Role } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',   
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

  message : string = '';
  myname = "chathuranga";
  isEditable : boolean = true;
  strName: string | undefined;
   data: any
   data2 : any[] = [];
   strStatusCode : string = '';
   strMessage : string = '';
response: { StatusCode: string; Data: Role[]; Message: string } | null = null;

  error: string | null = null;

  constructor( public apiService: ApiService) {}
  ngOnInit(): void {
   
    this.apiService.getRolesTest().subscribe({
      next: (res) => this.strName = res,
      error: (err) => console.error('API Error:', err)
    });
  /*
   this.apiService.getRoles("2").subscribe({
      next: (res) => {this.data = res},
      error: (err) => this.error = 'Failed to load data'
    });
    */
    this.apiService.getRoles("2").subscribe({
      next: (res) => {
        this.response = res;
        this.data2 = res.Data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Failed to load API data';
        this.response = null;
        console.error(err);
      }
    
    });
 

  }
 
  yourname : string = "kamal";
  
   users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
 
   fruits: string[] = ['Apple', 'Orange', 'Banana'];
  
   schoolmate: Array<string> = ['Chamil','Dhanushka', 'Ruwan'];
   edit(){
    this.isEditable = true; 
   }

   showMsg() {
    this.message = 'Way to go 🚀';

/*
    //--------------------------------- api call
   // const strName  = 'your value';

    this.apiService.getRoles().subscribe(
      data => this.strName = data,
      error => console.error('Error fetching string:', error)
    );
*/
} 
  
}

