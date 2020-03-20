import produce from 'immer';

const INITIAL_STATE = {
  pokemon: [],
  pokeType: 10,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@search/SET_SEARCH':
      return produce(state, draft => {
        const { pokemon } = action;
        draft.pokemon = pokemon;
      });

    default:
      return state;
  }
}
