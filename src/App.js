import React from 'react';
import CarroEstado from './Components/CarroEstado';
import CarroEfeito from './Components/CarroEfeito';
import { CorProvider } from './Components/CarroContext';
import CarroContexto from './Components/CarroContexto';


function App() {
  return (
    <div>
      <h1>Exemplos de React Hooks</h1>

   
      <CarroEstado />

    
      <CarroEfeito />

      <CorProvider>
        <CarroContexto />
     -- </CorProvider>
    </div>
  );
}

export default App;
