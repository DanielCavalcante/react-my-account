import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead,
  TableRow,
  Paper,
  Container
} from '@material-ui/core';
import axios from 'axios';

function Pokemons() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function findPokemons() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
      console.log(response)
      setPokemons(response.data.results)
    }
    
    findPokemons();
  }, []);

  

  function renderPokemons() {
    console.log(pokemons)
    return (
      pokemons && pokemons.map((pokemon) => {
        return (
          <TableRow>
            <TableCell>{pokemon.name}</TableCell>
            <TableCell>{pokemon.url}</TableCell>
          </TableRow>
        )
      })
    )
  }

  return (
    <Container>
      <Paper>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Url</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderPokemons()}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default Pokemons;