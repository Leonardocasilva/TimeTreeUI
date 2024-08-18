import { Component } from '@angular/core';

const { version: version } = require('./../../../package.json');

@Component({
  selector: 'app-companie',
  templateUrl: './companie.component.html',
  styleUrls: ['./companie.component.scss']
})
export class CompanieComponent {
  sysVersion: string = version;
  isCollpased: boolean = false;
}
