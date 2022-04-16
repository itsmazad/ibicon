import {useState, useEffect } from 'react';

import SearchBar from './components/Forms/SearchBar';
import ItemsListView from './components/Items/List/View';
import ItemsGridView from './components/Items/Grid/View';
import ItemDetails from './components/Items/ItemDetails';
import DefaultParams from './components/Forms/SearchBarDto';

function App() {
  let dummy = [
    {
      key: 1,
      id: 1,
      title:'Google',
      types:[ 'Search', 'Email'],
      icon: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
      image:'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
      favorite:true
    },
    {
      key: 2,
      id: 2,
      title:'Apple',
      types:[ 'Phone', 'Laptop'],
      icon: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
      image:'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
      favorite:false
    },
    {
      key : 3,
      id: 3,
      title:'Microsoft',
      types:[ 'Office'],
      icon: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
      image:'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
      favorite:true
    },
    {
      key: 4,
      id: 4,
      title:'Tesla',
      types:[ 'Car'],
      icon: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
      image:'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
      favorite:false
    },
    {
      key: 5,
      id: 5,
      title:'Meta',
      types:[ 'Social', 'VR'],
      icon: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
      image:'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
      favorite:false
    },
  ];
  let defaultParams = DefaultParams;

  const [isLoading, setIsLoading] = useState(true);
  const [source, setSource] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selctedChar, setSelecteCharacter] = useState();
  const [searchParam, setSearchParam] = useState(defaultParams);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'http://localhost:3000/?searchValue=&searchType=A&viewTypeList='
    ).then(data => {
      setIsLoading(false);
      setSource(dummy);
      setCharacters(dummy);
    });
  }, []);

  useEffect(() => {
    console.log("Params updated", searchParam);
    let items = [...source];
    if(!searchParam){
      return;
    }
    items = searchParam.allChars ? items : items.filter((row) => row.favorite === true);
    if(searchParam.searchValue !== '') {
      items = items.filter((row) => row.title.indexOf(searchParam.searchValue) > -1);
    }
    if(searchParam.searchType !== '') {
      items = items.filter((row) => row.types.includes(searchParam.searchType));
    }
    setCharacters(items);
  }, [searchParam]);

  function onFavClickHandler(id) {
    for (let i = 0; i < source.length; i++) {
      if(source[i].id === id) {
        source[i].favorite = !source[i].favorite
      }
    }
    setSource(source);
    let newCharacters = [...source]
    if(!searchParam.allChars) {
      newCharacters = newCharacters.filter((row) => row.favorite === true);
    }
    setCharacters(newCharacters);
  }

  function onSelectIconHandler(id){
    const selectedItem = characters.find((row) => row.id === id);
    setSelecteCharacter(selectedItem);
    console.log("Selected prop", selectedItem);
  }

  if(isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }
  
  return (
    <div>
      {!selctedChar && <SearchBar defaultParams={defaultParams} updateDefaultParam={setSearchParam} /> }
      {selctedChar && <ItemDetails data={selctedChar} onFavClickHandler={onFavClickHandler} onSelectIconHandler={onSelectIconHandler} /> }
      {!selctedChar && searchParam && searchParam.viewTypeList && <ItemsListView data={characters} onFavClickHandler={onFavClickHandler} onSelectIconHandler={onSelectIconHandler}/> }
      {!selctedChar && searchParam && !searchParam.viewTypeList && <ItemsGridView data={characters} onFavClickHandler={onFavClickHandler} onSelectIconHandler={onSelectIconHandler} /> }
    </div>
  );
}

export default App;
