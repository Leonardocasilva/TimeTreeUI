import { Component } from '@angular/core';

const { version: version } = require('./../../../package.json');

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  sysVersion: string = version;
  isCollpased: boolean = false;
}
