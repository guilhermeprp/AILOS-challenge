import { CooperadoSelected } from '../pages/forms/cooperado.model';

export const CpfSearch = (data: Array<object>, cpfPesquisado: String) => {
  let recipe: CooperadoSelected | undefined;

  data.map((props: any) => {
    if (props.cpf === cpfPesquisado) {
      recipe = {
        cpf: props.cpf,
        pessoa: {
          nome: props.nome,
          conta_corrente: props.conta_corrente,
          conta_aplicacao: props.conta_aplicacao,
        },
      };
    }
  });

  return recipe;
};
