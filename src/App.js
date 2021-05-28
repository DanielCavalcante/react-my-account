import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Pokemons from './pages/pokes/Pokemons';

const queryClient = new QueryClient();

function App() {
  console.log(queryClient)
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <div>
        <Pokemons />
      </div>
    </QueryClientProvider>
    </>
  );
}

export default App;