import {useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import SearchBar from './components/Forms/SearchBar';
import ItemsListView from './components/Items/List/View';
import ItemsGridView from './components/Items/Grid/View';
import ItemDetails from './components/Items/ItemDetails';
import DefaultParams from './components/Forms/SearchBarDto';

import { GET_TYPES, GET_POKEMONS, GET_POKEMON_DETAILS } from "./store/Queries";

function App() {
  let defaultParams = DefaultParams;
  const sourcePokemons = useQuery(GET_POKEMONS);
  const sourceTypes = useQuery(GET_TYPES);

  const [source, setSource] = useState([]);
  const [searchTypeOption, setSearchTypeOption] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selctedChar, setSelecteCharacter] = useState();
  const [searchParam, setSearchParam] = useState(defaultParams);

  useEffect(() => {
    
    if(sourcePokemons.data && sourcePokemons.data.pokemons && sourcePokemons.data.pokemons.edges){
      setSource(sourcePokemons.data.pokemons.edges);
      setCharacters(sourcePokemons.data.pokemons.edges);
      // console.log("useEffect sourcePokemons", sourcePokemons.data.pokemons.edges);
    }
    
  }, [sourcePokemons.data]);

  useEffect(() => {
    if(sourceTypes.data && sourceTypes.data.pokemons && sourceTypes.data.pokemons.edges){
      const typesSets = sourceTypes.data.pokemons.edges.reduce(
        (previousValue, currentValue) => previousValue.concat(currentValue.types), []
      );

      const typesSet = new Set(typesSets);
      setSearchTypeOption(Array.from(typesSet));
      // console.log("useEffect sourceTypes", typesSets);
    }
  }, [sourceTypes.data]);


  useEffect(() => {
    let items = [...source];
    if(!searchParam){
      return;
    }
    items = searchParam.allChars ? items : items.filter((row) => row.favorite === true);
    if(searchParam.searchValue !== '') {
      items = items.filter((row) => row.name.indexOf(searchParam.searchValue) > -1);
    }
    if(searchParam.searchType !== '') {
      items = items.filter((row) => row.types.includes(searchParam.searchType));
    }
    setCharacters(items);
    // console.log("useEffect searchParam", items);
  }, [searchParam]);

  function onFavClickHandler(id) {
    for (let i = 0; i < source.length; i++) {
      if(source[i].id === id) {
        source[i].favorite = !source[i].favorite
      }
    }
    // setSource(source);
    let newCharacters = [...source]
    if(!searchParam.allChars) {
      newCharacters = newCharacters.filter((row) => row.favorite === true);
    }
    setCharacters(newCharacters);
  }

  function onSelectIconHandler(id){
    const selectedItem = characters.find((row) => row.id === id);
    setSelecteCharacter(selectedItem);
  }

  if(sourcePokemons.loading) {
    return <section><p>Loading...</p></section>
  }
  if(sourcePokemons.error) {
    return <section><p>Loading Failed. Please retry.</p></section>
  }
  
  return (
    <div>
      {!selctedChar && <SearchBar defaultParams={defaultParams} searchTypeOption={searchTypeOption} updateDefaultParam={setSearchParam} /> }
      {selctedChar && <ItemDetails data={selctedChar} onFavClickHandler={onFavClickHandler} onSelectIconHandler={onSelectIconHandler} /> }
      {!selctedChar && searchParam && searchParam.viewTypeList && <ItemsListView data={characters} onFavClickHandler={onFavClickHandler} onSelectIconHandler={onSelectIconHandler}/> }
      {!selctedChar && searchParam && !searchParam.viewTypeList && <ItemsGridView data={characters} onFavClickHandler={onFavClickHandler} onSelectIconHandler={onSelectIconHandler} /> }
    </div>
  );
}

export default App;
