import Row from './Row';

import classes from './View.module.css';

function View(props) {
  const listItem = props.data.map((row) => <Row 
    key={row.key} 
    id={row.id} 
    title={row.title} 
    types={row.types} 
    icon={row.icon} 
    favorite={row.favorite} 
    onSelectIconHandler={props.onSelectIconHandler}
    onFavClickHandler={props.onFavClickHandler} />);
    
  return <ul className={classes.container}>
    {listItem}
  </ul>
}

export default View;