import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideModal } from '../../store/modules/modal/actions';

import { StyledModal } from './styles';

export default function Modal() {
  const dispatch = useDispatch();
  let isOpen = useSelector(state => state.modal.modal);

  function toggleModal(e) {
    isOpen = !isOpen;
  }

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => dispatch(hideModal(false))}
        onEscapeKeydown={() => dispatch(hideModal(false))}
      >
        <span> Obrigado! </span>
        <span> Você Ganhou de volta R$xxx,xx</span>
        <span>
          <button
            type="button"
            className="end"
            onClick={() => dispatch(hideModal(true))}
          >
            Finalizar
          </button>
          <button
            type="button"
            className="back"
            onClick={() => dispatch(hideModal(false))}
          >
            Voltar
          </button>
        </span>
      </StyledModal>
    </div>
  );
}
