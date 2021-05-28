import React from 'react';
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

  const { status, data, error } = useQuery('pokes', getAllPokes)

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

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
    return (
      data.results && data.results.map((pokemon) => {
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