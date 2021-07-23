import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Testserver";
  userName = '';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];
  display = false;
  // log = [];
  log : number[] = [];
  datelog : any[] = [];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was Created! Name is " + this.serverName;
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  userNameReset() {
    this.userName = '';
  }

  onToggleDetails() {
    this.display = !this.display;
    this.log.push((this.log.length)+ 1)
    this.datelog.push(new Date());
  }

}
