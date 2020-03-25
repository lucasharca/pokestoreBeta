import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/modules/cart/actions';

import { showModal } from '../../store/modules/modal/actions';

import { Container, PokeContainer, Header, Footer, TotalCount } from './styles';

import pokeShadow from '../../assets/images/poke-shadow.png';

export default function Cart() {
  const [frete, setFrete] = useState(14.99);
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  function handleRemoveProduct(id) {
    dispatch(removeFromCart(id));
  }

  const prices = products.map(product => product.price);
  const subTotal =
    products.length > 0
      ? parseFloat(
          prices
            .reduce(function(Acumulador, valorAtual) {
              return Acumulador + valorAtual;
            })
            .toFixed(2)
        )
      : 0;
  const total = subTotal + frete;

  return (
    <Container>
      <Header>
        <div className="headDiv"> Resumo do Pedido </div>

        <PokeContainer>
          <div>
            <span>{products.length > 0 ? `${products.length}` : 0}</span>

            <span>{products.length <= 1 ? 'produto' : 'produtos'} </span>
          </div>

          <div>
            <span>{subTotal > 0 ? subTotal : ''}</span>
            <span />
          </div>
        </PokeContainer>
        <PokeContainer>
          <div>
            <span>Frete</span>
          </div>

          <div>
            <span>{products.length > 0 ? `R$${frete}` : 'R$0,00'}</span>
            <span />
          </div>
        </PokeContainer>
      </Header>
      <Footer>
        <TotalCount>
          <span>Total:</span>
          <span>
            {total > 0 && products.length > 0 ? `R$${total}` : 'R$0.00'}
          </span>
        </TotalCount>
        <div>
          <button
            type="button"
            disabled={products.length <= 0}
            className={products.length <= 0 ? 'disabled' : null}
            onClick={() => dispatch(showModal())}
          >
            Finalizar Compra
          </button>
        </div>
      </Footer>
    </Container>
  );
}
