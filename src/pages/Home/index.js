import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import dexNumber from '../../util/dexNumber';

import PokeShadow from '../../assets/images/poke-shadow.png';
import { ProductList, Container } from './styles';

import Cart from '../../components/Cart';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get('type/10/');
      const data = response.data.pokemon.map(item => ({
        ...item,
        number: dexNumber(item.pokemon.url),
      }));
      setPokemon(data);
    }
    getPokemon();
  }, []);

  function showPoke() {
    console.log(pokemon);
  }

  return (
    <Container>
      <ProductList>
        {pokemon.map(product => (
          <li key={product.pokemon.name}>
            <img
              src={
                product.number < 10115
                  ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.number}.png`
                  : PokeShadow
              }
              alt={product.pokemon.name}
            />
            <strong> {product.pokemon.name}</strong>
            <span> R$4,99 </span>

            <button type="button">
              <span> ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
      <Cart />
    </Container>
  );
}
