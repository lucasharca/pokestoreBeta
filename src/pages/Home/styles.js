import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1060px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 0px auto;
  @media (max-width: 1075px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    max-width: 300px;
    max-height: 240px;

    img {
      align-self: center;
      width: 130px;
    }
    > strong {
      text-transform: capitalize;
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin: 5px 10px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 0px 10px 10px;
    }
  }

  @media (max-width: 1075px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);

    li {
      max-width: 400px;
    }
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(1, 1fr);

    li {
      max-width: 100%;
    }
  }

  button {
    background: #ef5350;
    color: #fff;
    border: 0;
    border-radius: 0 0 4px 4px;
    height: 40px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;

    &:hover {
      background: ${darken(0.05, '#ef5350')};
      transition: background 0.5s;
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 80px;
    height: 40px;
    border: none;
    background-color: #ef5350;
    border-radius: 4px;
    color: #fff;
    margin: 0 30px;

    :hover {
      background: ${darken(0.05, '#ef5350')};
      transition: background 0.5s;
    }
  }

  span {
    color: #fff;
    font-weight: bold;
    font-size: 25px;
  }
`;
