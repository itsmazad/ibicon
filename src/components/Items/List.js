import Card from './Card';
import Row from './Row';

import classes from './List.module.css';

function getFilteredData(items, searchParam){
  items = searchParam.allChars ? items : items.filter((row) => row.isFavorite === true);
  if(searchParam.searchValue !== '') {
    let searchRegex = new RegExp(searchParam.searchValue, 'gi');
    items = items.filter((row) => row.name.search(searchRegex) > -1);
  }
  if(searchParam.searchType !== '') {
    items = items.filter((row) => row.types.includes(searchParam.searchType));
  }
  return items;
}

function ItemsList(props) {
  const searchParam = props.searchParam;
  const filteredData = getFilteredData(props.data, searchParam);
  const listItems = filteredData.map(
    (item) => (searchParam?.viewTypeList) ? <Row key={item.id} data={item} /> : <Card key={item.id} data={item} />
  );
    
  return <div className={classes.container}>
    {listItems}
  </div>
}

export default ItemsList;