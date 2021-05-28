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
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getAllPokes } from '../../services/pokeService'

function Pokemons() {

  let pokes = useQuery('pokes', getAllPokes)

  return (
    <>
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
      <ReactQueryDevtools initialIsOpen />
    </>
  )
      
  function renderPokemons() {
    let pokemons = pokes.data.results;
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
}

export default Pokemons;