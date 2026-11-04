import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';



export interface Role {
  iRoleID: number;
  strRoleName: string;
  strRoleDes: string;
  strSysCode: string;
  iIsUserWise: number;
  strCreateUser: string | null;
  dtCreateDate: string; // or use Date if you want to convert it
}

export interface RoleApiResponse {
  StatusCode: string;
  Data: Role[];
  Message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

   
  
   strName : string = "";
   private apiUrl = 'http://localhost:62009/api/fnGetUserRoleName'; // Replace with actual URL
   private apiUrlGetRole = 'http://localhost:62009/api/fnGetUserRole'; // Replace with actual URL
  constructor(private http: HttpClient) {}

  getRolesTest(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
  getRoles( strRoleId : string ) : Observable<RoleApiResponse>{
     let params = new HttpParams().set('strRoleId', strRoleId);
    return this.http.get<RoleApiResponse>(this.apiUrlGetRole  ,{params});

  }
}
  
