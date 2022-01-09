import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl ="https://localhost:7167/api";
  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl+'/inspections');
  }

  addInspection(data:any){
    return this.http.post(this.inspectionAPIUrl +'/inspections',data);
  }

  updateInspection(id:string,data:any){
    return this.http.put(this.inspectionAPIUrl +`/inspections/${id}`,data);
  }
  deleteInspection(id:string){
    return this.http.delete(this.inspectionAPIUrl+`/inspections/${id}`);
  }
  //Inspection Types
  getInspectionTypesList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl+'/inspectionTypes');
  }

  addInspectionType(data:any){
    return this.http.post(this.inspectionAPIUrl +'/inspectionTypes',data);
  }

  updateInspectionType(id:string,data:any){
    return this.http.put(this.inspectionAPIUrl +`/inspectionTypes/${id}`,data);
  }
  deleteInspectionType(id:string){
    return this.http.delete(this.inspectionAPIUrl+`/inspectionTypes/${id}`);
  }
  //Statuses
  getStatusesList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl+'/Statuses');
  }

  addStatus(data:any){
    return this.http.post(this.inspectionAPIUrl +'/Statuses',data);
  }

  updateStatus(id:string,data:any){
    return this.http.put(this.inspectionAPIUrl +`/Statuses/${id}`,data);
  }
  deleteStatus(id:string){
    return this.http.delete(this.inspectionAPIUrl+`/Statuses/${id}`);
  }
}
