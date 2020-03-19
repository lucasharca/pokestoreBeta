import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  margin: 10px;
  border-radius: 4px;
  min-width: 275px;
  max-height: 802px;
  background: #fff;

  @media (max-width: 1075px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  input {
    height: 40px;
    font-size: 20px;
    padding: 5px;
    border: none;
    border-radius: 4px 0 0 4px;
    vertical-align: bottom;
  }
  button {
    height: 40px;
    width: 50px;
    font-size: 20px;
    vertical-align: bottom;
    padding: 5px;
    padding-top: 10px;
    border-radius: 0 4px 4px 0;
    border: none;
    background: #fff;
    color: #444;
  }
  img {
    height: 65px;
  }
`;
