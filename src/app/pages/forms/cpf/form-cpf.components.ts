import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { mask } from '../../../../utils/mask';
import dataJson from '../../../../data/data.json';
import { CpfSearch } from 'src/app/hook/cpf.action';
import { CooperadoSelected } from '../cooperado.model';
import { CpfCooperadoValidate } from 'src/utils/cpf-cooperado-validate';

// !Favor ler o README.md contido na pasta forms
@Component({
  selector: 'app-form-cpf',
  templateUrl: './form-cpf.component.html',
  styleUrls: ['./form-cpf.component.css'],
})
export class FormCpfComponent {
  error: Boolean = false;
  errorMsg: string = '';
  validCpf: Boolean = false;
  cooperadoSelecionado?: CooperadoSelected | void;
  cpfPesquisado!: String;
  cpfValidate!: [boolean, string];
  @Input() cpfInputValue: string = '';

  changeHandler() {
    this.cpfInputValue = mask['cpf'](this.cpfInputValue);
  }

  clickHandler() {
    this.cooperadoSelecionado = CpfSearch(dataJson, this.cpfInputValue);

    this.cpfValidate = CpfCooperadoValidate(
      this.cpfInputValue,
      this.cooperadoSelecionado
    );

    this.error = this.cpfValidate[0];
    this.errorMsg = this.cpfValidate[1];

    if (this.error) {
      return (this.validCpf = false);
    }

    return (this.validCpf = true);
  }

  clearError() {
    this.error = false;
  }
}
