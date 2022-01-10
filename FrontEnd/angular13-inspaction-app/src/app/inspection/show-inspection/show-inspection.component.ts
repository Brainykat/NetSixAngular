import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  constructor(private service:InspectionApiService) { }

  inspectionList$!:Observable<any[]>;
  inspectionTypeList$!:Observable<any[]>;
  inspectionTypeList:any=[];

  //Map to display data assosiated with Foreign keys
  inspectionTypesMap:Map<string,string> = new Map();

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.refreshInspectionTypeMap();
  }
  //Variables (properties)
  modalTitle:string='';
  activateAddEditInspectionComponent:boolean=false;
  inspection:any;

  modalAdd(){
    this.inspection = {
      id:null,
      status:null,
      comments:null,
      inspectionTypeId:null
    }
    this.modalTitle ="Add Inspection";
    this.activateAddEditInspectionComponent = true;
  }
  modalEdit(item:any){
    this.inspection = item;
    this.modalTitle ="Edit Inspection";
    this.activateAddEditInspectionComponent = true;
  }
  deleteInspection(item:any){
    if(confirm(`Are you sure you want to delete inspection ${item.status} ${item.comments}`)){
      this.service.deleteInspection(item.id).subscribe(res => {
        this.modalClose();
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display ="block";
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display ="none";
          }
        },4000);
      })
    }
  }
  modalClose(){
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }
  refreshInspectionTypeMap(){
    this.service.getInspectionTypesList().subscribe(data => {
      this.inspectionTypeList = data;
      for (let i = 0; i < data.length; i++) {
        this.inspectionTypesMap.set(this.inspectionTypeList[i].id,this.inspectionTypeList[i].inspectionName);
      }
    })
  }
}
