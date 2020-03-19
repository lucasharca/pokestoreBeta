function getNumber(pokemon) {
  const number = pokemon.split('/');
  return number[6];
}

export default getNumber;
