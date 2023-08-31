import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  model: any = {
    edit: false,
    childData: []
  };
  groupData: any = [];
  edit: boolean = false;
  addNewGroupValue : boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2,private toastr: ToastrService) { }
  ngAfterViewInit() {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', '#eaebeb');
  }
  addNewGroup() {
    this.addNewGroupValue = true;
  };
  createParentGroup() {
    this.toastr.info('Data Submitted...', 'Wait');
    
      if(this.model.groupName != null || undefined || ''){
        this.groupData.push(this.model);
        this.model = {
          edit: false,
          childData: []
        }
        this.addNewGroupValue = false;
        this.toastr.success('Group', 'Successfully Added......!');
      }else{
        
        this.toastr.error('Group Name Could not be Added', 'Error');
        this.toastr.error('Please Enter Group Name');
      } 
 
    
  
  };

cancel(){
  this.addNewGroupValue = false;
  this.model = {
    edit: false,
    childData: []
  }
}

}
