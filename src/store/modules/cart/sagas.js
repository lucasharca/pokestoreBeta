import { select, put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess } from './actions';

function* addToCart(product) {
  const productExists = yield select(state =>
    state.cart.products.find(p => p.dexNum === product.pokemon.number)
  );

  if (productExists) {
    return;
  }

  const data = {
    name: product.pokemon.name,
    dexNum: product.pokemon.number,
    avatarUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.pokemon.number}.png`,
    price: 4.99,
  };

  yield put(addToCartSuccess(data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
