import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 40rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 20px;
  background-color: #ddd;
  border: 30px solid #ef5350;
  border-radius: 5px;

  button {
    border: none;

    color: #fff;
    height: 40px;
    width: 100px;
    border-radius: 4px;
    margin: 0px 5px;
  }
  .end {
    background: #6BCB40;
  }

  .back {
    background: #ef5350;
  }
`;
