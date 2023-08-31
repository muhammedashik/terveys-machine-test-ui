import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() data: any
  childData: any = [];
  childModel: any = {
    edit: false,
    childSet: true
  };
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  editData(i: number) {
    this.data.forEach((element: any, index: number) => {
      if (i === index) {
        element.edit = true;
      }
    });

  };
  upDateDAta(i: number, value :any) {
   console.log('d',value.groupName );
    this.toastr.info('Data Submitted...', 'Wait');
    if(value.groupName == undefined || value.groupName =='' ||  value.groupName == null){
      this.toastr.error('Group  Name Could not be Updated', 'Error');
      this.toastr.error('Please Enter Group  Name');
      
    }else{
      value.edit = false;
      this.toastr.success( 'Updated Successfully ......!');
    }
  };
  deleteGroup(i: number) {
    this.data.splice(i, 1);
    this.toastr.warning('Deleted Successfully.......!')
  };

  createChildData(value: any, i: number) {
    this.data.forEach((element: any, index: number) => {
     
        if (i === index) {
          element.childData.push(this.childModel);
        }
    });

  };
  addChild(i: number, value: any) {
    this.toastr.info('Data Submitted...', 'Wait');
    if(value.childName == undefined || value.childName ==""  || value.childName ==null){
      this.toastr.error('Subgroup  Name Could not be Added', 'Error');
      this.toastr.error('Please Enter Subgroup  Name');
    }else{
      value.childSet = false;
      this.childModel = {
        edit: false,
        childSet: true
      };
      this.toastr.success( 'Added Successfully ......!');
      
    } 
    
  };
  cancel(i:number,value: any,val :any){
    value.childSet = false;
    val.childData.splice(i, 1)
    this.childModel = {
      edit: false,
      childSet: true
    }
  };
  editChildData(value:any){
    value.edit = true;
  }
  upDateChild(value:any){
    this.toastr.info('Data Submitted...', 'Wait');
    if(value.childName == undefined || value.childName ==""  || value.childName ==null){
      this.toastr.error('Subgroup  Name Could not be Updated', 'Error');
      this.toastr.error('Please Enter Subgroup  Name');
     
    }else{
      value.edit = false;
      this.toastr.success( 'Updated Successfully ......!');
    }
   
  };
  deleteChild(i:number,value:any){
    value.splice(i, 1);
    this.toastr.warning('Deleted Successfully.......!')
  }
}
