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
  }

}
