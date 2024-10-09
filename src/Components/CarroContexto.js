import React, { useContext } from 'react';
import { CorDoCarroContext } from './CarroContext';

function CarroContexto() {
  const { cor, alterarCor } = useContext(CorDoCarroContext);

  return (
    <div>
      <h2>Exemplo de useContext</h2>
      <p>A cor do carro é: {cor}</p>
      <button onClick={alterarCor}>Alterar Cor via Context</button>
    </div>
  );
}

export default CarroContexto;
