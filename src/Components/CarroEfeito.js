import React, { useState, useEffect } from 'react';

function CarroEfeito() {
  const [cliques, setCliques] = useState(0);

  useEffect(() => {
    document.title = `Cliques: ${cliques}`;
  }, [cliques]); //  <--- e sempre vai atualizar quando clicar \o/

  return (
    <div>
      <h2>Exemplo de useEffect</h2>
      <p>Número de cliques: {cliques}</p>
      <button onClick={() => setCliques(cliques + 1)}>Clique Aqui</button>
    </div>
  );
}

export default CarroEfeito;
