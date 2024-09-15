import { HttpErrorResponse } from '@angular/common/http';
import { IReceita } from './../../../assets/interface/IReceita';
import { ReceitaFederalService } from './../../../assets/services/receita-federal.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss']
})
export class CompanyDataComponent {
  companyDataForm: FormGroup = new FormGroup({
    document: new FormControl('', [Validators.required]),
    socialName: new FormControl('', [Validators.required]),
    phantasyName: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    neighborhood: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    cellphone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  constructor(private receitaService: ReceitaFederalService) { }

  getCompanyData() {
    const doc: string | null = this.companyDataForm.get('document')?.value;

    if (doc) {
      this.receitaService
        .getCompanyDataFromReceita(doc)
        .subscribe({
          next: (company: IReceita) => {
            debugger
          },
          error: (err: HttpErrorResponse) => {

          }
        })
    }
  }
}
