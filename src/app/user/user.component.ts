import { Component } from '@angular/core';

const { version: version } = require('./../../../package.json');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  sysVersion: string = version;
  isCollpased: boolean = false;
}
