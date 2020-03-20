export function addToCartRequest(pokemon) {
  return { type: '@cart/ADD_REQUEST', pokemon };
}

export function addToCartSuccess(product) {
  return { type: '@cart/ADD_SUCCESS', product };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}
