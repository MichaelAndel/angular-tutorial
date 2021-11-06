import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  styles: [`
    .clicks {
      background-color: #ADD8E6;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName: 'Test server';
  serverCreated: boolean;
  servers = ['Test Server', 'Test server 2'];
  secretsAreReveald: boolean = false;
  clickArray = [];
  clickIndex: number = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onRevealSecrets(event: Event) {
    this.secretsAreReveald = !this.secretsAreReveald;
    this.clickArray.push({event: event.type, index: + (this.clickIndex = this.clickIndex + 1)});
  }

  getColor() {
    return this.clickIndex >= 5 ?  'white' : undefined;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //   console.log(event);
  // }
}
