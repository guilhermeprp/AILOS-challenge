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

  if (cpf.length < 11) {
    errorMsg = 'O CPF deve conter pelo menos 11 dígitos.';
    return [true, errorMsg];
  }

  if (CpfEqualNumbers(cpf)) {
    errorMsg = 'CPF com formato incorreto.';
    return [true, errorMsg];
  }

  if (!ValidateFirstDigt(cpf)) {
    errorMsg = 'CPF incorreto.';
    return [true, errorMsg];
  }

  if (!ValidateSecondDigt(cpf)) {
    errorMsg = 'CPF incorreto.';
    return [true, errorMsg];
  }

  if (!cooperado) {
    errorMsg = 'CPF não encontrado.';
    return [true, errorMsg];
  }

  return [false, errorMsg];
};

function CpfEqualNumbers(cpf: string) {
  const cpfArray = [];
  for (let i = 0; i < cpf.length; i++) {
    cpfArray.push(cpf.charAt(i));
  }
  return cpfArray.every((val, i, arr) => val === arr[0]);
}

function ValidateFirstDigt(cpf: string) {
  let add = 0;
  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(9))) {
    return false;
  }
  return true;
}

function ValidateSecondDigt(cpf: string) {
  let add = 0;
  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(10))) {
    return false;
  }
  return true;
}
