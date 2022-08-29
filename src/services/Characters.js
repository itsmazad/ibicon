import { useQuery, useMutation } from '@apollo/client';
import { GET_TYPES, GET_POKEMONS, GET_POKEMON_DETAILS, SET_FAVORITE, SET_UNFAVORITE } 
  from "../store/Queries";

function FetchAllData(setState) {
  useQuery(GET_POKEMONS, {  
    onCompleted: data => { 
      // console.log('Completed GET_POKEMONS', data?.pokemons?.edges); 
      setState(data?.pokemons?.edges || null);
    }, 
    fetchPolicy: 'network-only', 
    notifyOnNetworkStatusChange: true
  });
}

function FetchTypes(setState) {
  useQuery(GET_TYPES, {  
    onCompleted: data => { 
      // console.log('Completed GET_TYPES', data?.pokemons?.edges); 
      const typesSets = data?.pokemons?.edges.reduce(
        (previousValue, currentValue) => previousValue.concat(currentValue.types), []
      );
      const typesSet = new Set(typesSets);
      setState(Array.from(typesSet).sort());
    }, 
    fetchPolicy: 'network-only', 
    notifyOnNetworkStatusChange: true
  });
}

function FetchDetails(id, setState) {
  useQuery(GET_POKEMON_DETAILS, { 
    variables: { id: id }, 
    onCompleted: data => { 
      // console.log('Completed GET_POKEMON_DETAILS', data?.pokemonById); 
      setState(data?.pokemonById || null); 
    }, 
    fetchPolicy: 'network-only', 
    notifyOnNetworkStatusChange: true
  });
}

function SetFavorite(id) {
  useMutation(SET_FAVORITE, { 
    variables: { id: id },
    refetchQueries: [
      GET_POKEMONS
    ]
  });   
}

function SetUnFavorite(id) {
  useMutation(SET_UNFAVORITE, { 
    variables: { id: id },
    refetchQueries: [
      GET_POKEMONS
    ]
  }); 
}

export { FetchAllData, FetchTypes, FetchDetails, SetFavorite, SetUnFavorite };