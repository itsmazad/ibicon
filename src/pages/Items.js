import {useState } from 'react';

import DefaultParams from '../components/Forms/SearchBarDto';
import SearchBar from '../components/Forms/SearchBar';
import ItemsListView from '../components/Items/List/View';
import ItemsGridView from '../components/Items/Grid/View';

import { FetchAllData } from "../services/Characters";

function Items() {
  const [searchParam, setSearchParam] = useState(DefaultParams);
  const [items, setStateItems] = useState(false);
  FetchAllData(setStateItems);
  return(
    <div>
      <SearchBar 
      defaultParams={searchParam} 
      updateDefaultParam={setSearchParam} />

      { items === false && <section><p>Loading...</p></section> }
      { items === null && <section><p>Unknown.</p></section> }
      { items && items !== null && searchParam.viewTypeList &&
        <ItemsListView data={items} />
      }
      { items && items !== null && !searchParam.viewTypeList &&
        <ItemsGridView data={items} />
      }
    </div>
    
  );
}

export default Items;