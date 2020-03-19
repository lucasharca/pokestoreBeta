import React from 'react';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { Container, Content } from './styles';
import Icon from '../../assets/images/poke-ball-png-4.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={Icon} alt="pokeball" />
        </Link>

        <div>
          <input placeholder="Pesquisar..." />
          <button type="button">
            <FaSearch />
          </button>
        </div>
      </Content>
    </Container>
  );
}
