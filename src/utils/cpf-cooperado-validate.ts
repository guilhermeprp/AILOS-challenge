import { CooperadoSelected } from 'src/app/pages/forms/cooperado.model';

export const CpfCooperadoValidate = (
  cpf: string,
  cooperado: void | CooperadoSelected | undefined
): [boolean, string] => {
  var errorMsg: string = '';

  if (cpf === '') {
    errorMsg = 'Por favor preencha o campo.';
    return [true, errorMsg];
  }

  if (cpf.length < 14) {
    errorMsg = 'O CPF deve conter pelo menos 11 dígitos.';
    return [true, errorMsg];
  }

  if (!cooperado) {
    errorMsg = 'CPF não encontrado';
    return [true, errorMsg];
  }

  return [false, errorMsg];
};
