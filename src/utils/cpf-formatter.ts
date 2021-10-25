export const FormatCpf = (cpf: string): string => {
  const cpfFormatted = cpf.replace(/[^\d]+/g, '');
  return cpfFormatted;
};
