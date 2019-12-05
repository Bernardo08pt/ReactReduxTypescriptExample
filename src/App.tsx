import React from 'react';
import './App.css';
import { Persons } from './pages/persons/Persons';
import { StoreProvider } from './store';

const App: React.FC = () => {
  return (
    <div className="App">
      <StoreProvider>
        <Persons />
      </StoreProvider>
    </div>
  );
}

export default App;
