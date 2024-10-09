import React, { useState } from 'react';

function CarroEstado() {
  const [cor, setCor] = useState('Azul');

  const alterarCor = () => {
    setCor(cor === 'Azul' ? 'Vermelho' : 'Azul');
  };

  return (
    <div>
      <h2>Exemplo de useState</h2>
      <p>A cor do carro é: {cor}</p>
      <button onClick={alterarCor}>Alterar Cor</button>
    </div>
  );
}

export default CarroEstado;
