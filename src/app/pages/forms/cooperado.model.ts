export interface CooperadoSelected {
  cpf: string;
  pessoa: Cooperado;
}

export interface Cooperado {
  nome: string;
  conta_corrente: string;
  conta_aplicacao: string;
  situacao?: string;
}
