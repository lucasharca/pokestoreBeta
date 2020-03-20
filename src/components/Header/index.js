import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { setSearchValue } from '../../store/modules/search/actions';

import { Container, Content } from './styles';
import Icon from '../../assets/images/poke-ball-png-4.png';

export default function Header() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={Icon} alt="pokeball" />
        </Link>

        <div>
          <input
            placeholder="Pesquisar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="button"
            onClick={() => dispatch(setSearchValue(search))}
          >
            <FaSearch />
          </button>
        </div>
      </Content>
    </Container>
  );
}
