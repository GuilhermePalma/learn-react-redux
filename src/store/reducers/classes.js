import { createStore } from "redux";

const INITIAL_STATE = {
  activeLeasson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      leassons: [
        { id: 1, title: "Primeira Aula" },
        { id: 2, title: "Segunda Aula" },
      ],
    },
    {
      id: 2,
      title: "Iniciando com React 2",
      leassons: [
        { id: 3, title: "Terceira Aula" },
        { id: 4, title: "Quarta Aula" },
      ],
    },
  ],
};

/**
 * Metodo responsavel por armazenar e manipular o Estado do Modulo de "Aulas" da Aplicação
 * 
 * state: Inicialmente vazio (Nesse caso, usa-se o INITIAL_STATE). Em um segundo momento, virá com
 *         o estado antigo (estado antes da action ser aplicada) 
 * action: Representa a alteração no Estado da Aplicação
 * 
 */ 
export default function classes(state = INITIAL_STATE, action) {
  console.log("Change in Redux State.\nAction: ");
  console.log(action);

  if(action.type === "TOGGLE_LESSON"){
    return {...state, activeModule: action.module, activeLeasson: action.leasson };
  }

  return state;
};
