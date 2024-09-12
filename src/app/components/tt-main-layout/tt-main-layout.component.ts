import { Component } from '@angular/core';

const { version: version } = require('./../../../../package.json');

@Component({
  selector: 'tt-main-layout',
  templateUrl: './tt-main-layout.component.html',
  styleUrls: ['./tt-main-layout.component.scss']
})
export class TtMainLayoutComponent {
  sysVersion: string = version;
  isCollpased: boolean = false;
}
