import { gql } from '@apollo/client';

export const GET_TYPES = gql`
  query {
    pokemons(query: { limit: 1000, offset: 0, search: null, filter: null }) {
      edges {
        types
      }
    }
  }
`;

export const GET_POKEMONS = gql`
  query {
    pokemons(query: { limit: 1000, offset: 0, search: null, filter: null }) {
      edges {
        id
        name
        types
        isFavorite,
        image
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
query {
  pokemonById(id: ID)  {
    id
    number
    name
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
    sound
    isFavorite
    weight {
      minimum
    }
    attacks {
      fast {
        name
        type
      }
    }
    evolutionRequirements {
      amount
      name
    }
    evolutions {
      id
    }
  }
} `
