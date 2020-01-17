import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  ServerName="Apollo";
  ServerPid=10;
  ServerStatus="Null";
  StatusFlag=true;
  ButtonStatus=false;
  firstName=null;
  message=null;
  changeStatus()
  {
    this.StatusFlag=!this.StatusFlag;
    if(this.StatusFlag===false)
    {
        this.ServerStatus="Offline";
    }
    else{
      this.ServerStatus="Online";
    }
    return this.ServerStatus;
  }
  resetString()
  {
    this.firstName=null;
  }
  checkStatus(){
      if(this.firstName ==null)
      {
        this.ButtonStatus=!this.ButtonStatus;
        this.message="first name is null";
        return this.ButtonStatus;
      }
      else{
        this.ButtonStatus=false;
        this.message="First name is not null";
       
        return this.ButtonStatus;
      }
   
}

}
