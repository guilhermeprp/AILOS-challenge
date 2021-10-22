import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { mask } from '../../../../utils/mask';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cpf',
  templateUrl: './form-cpf.component.html',
  styleUrls: ['./form-cpf.component.css'],
})
export class FormCpfComponent implements OnInit {
  cpfInputValue: string = '';
  error: Boolean = false;
  errorMsg: string = '';
  submitted: boolean = false;

  @ViewChild('cpfInput') declare el: ElementRef;

  constructor() {}
  ngOnInit(): void {}

  changeHandler() {
    this.cpfInputValue = mask['cpf'](this.cpfInputValue);
  }

  clickHandler(): string {
    this.cpfInputValue = mask['cpf'](this.cpfInputValue);

    if (this.cpfInputValue === '') {
      this.error = true;
      return (this.errorMsg = 'Por favor preencha o campo.');
    }

    if (this.cpfInputValue.length < 11) {
      this.error = true;
      return (this.errorMsg = 'O CPF deve conter pelo menos 11 dígitos.');
    }

    this.error = false;
    this.submitted = true;
    return this.cpfInputValue;
  }

  clearError() {
    this.error = false;
  }

  submitHandler() {}
}
