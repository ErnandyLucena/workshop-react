import React, { createContext, useState } from 'react';

// Aqui criamos um contexto galera :0
const CorDoCarroContext = createContext();

function CorProvider({ children }) {
  const [cor, setCor] = useState('Azul');

  const alterarCor = () => {
    setCor(cor === 'Azul' ? 'Vermelho' : 'Azul');
  };

  return (
    <CorDoCarroContext.Provider value={{ cor, alterarCor }}>
      {children}
    </CorDoCarroContext.Provider>
  );
}

export { CorDoCarroContext, CorProvider };
