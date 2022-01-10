import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  statusList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;

  constructor(private service:InspectionApiService) { }

  //Passed from parent component
  @Input() inspection:any;

  id:string='';
  status:string='';
  comments:string='';
  inspectionTypeId:string=''

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId= this.inspection.inspectionTypeId;
    this.statusList$=this.service.getStatusesList();
    this.inspectionList$=this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
  }
}
