import React, { useState, useEffect } from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import api from '../../services/api';

import dexNumber from '../../util/dexNumber';

import PokeShadow from '../../assets/images/poke-shadow.png';
import { ProductList, Container, Pagination } from './styles';

import Cart from '../../components/Cart';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(9);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get('type/3/');
      const data = response.data.pokemon.map(item => ({
        ...item,
        number: dexNumber(item.pokemon.url),
      }));
      setPokemon(data);
      console.log(data);
    }
    getPokemon();
  }, []);

  function pageSub() {
    setPage(page - 1);
    setFirstIndex(firstIndex - 10);
    setLastIndex(lastIndex - 10);
  }

  function pageAdd() {
    setPage(page + 1);
    setFirstIndex(firstIndex + 10);
    setLastIndex(lastIndex + 10);
  }

  return (
    <Container>
      <ProductList>
        {pokemon
          .map(product => (
            <li key={product.pokemon.name}>
              <img
                src={
                  product.number < 10091
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
          ))
          .slice(firstIndex, lastIndex)}
      </ProductList>
      <Cart />
      <Pagination>
        <div>
          <button
            type="button"
            onClick={() => pageSub()}
            disabled={firstIndex <= 0}
          >
            <FaLessThan />
          </button>
          <span>{page}</span>
          <button
            type="button"
            onClick={() => pageAdd()}
            disabled={lastIndex >= pokemon.length}
          >
            <FaGreaterThan />
          </button>
        </div>
      </Pagination>
    </Container>
  );
}
