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
  changeStatus()
  {
    if(this.StatusFlag===false)
    {
        this.ServerStatus="Offline";
    }
    else{
      this.ServerStatus="Online";
    }
    return this.ServerStatus;
  }
}
