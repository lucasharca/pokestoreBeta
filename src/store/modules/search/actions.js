export function setSearchValue(pokemon) {
  return { type: '@search/SET_SEARCH', pokemon };
}

export function clearSearch() {
  return { type: '@search/CLEAR_SEARCH' };
}
