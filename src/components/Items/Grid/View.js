import Card from './Card';

import classes from './View.module.css';

function View(props) {
  const listItem = props.data.map((card) => <Card 
    key={card.id} 
    id={card.id} 
    title={card.name} 
    types={card.types} 
    icon={card.image} 
    favorite={card.isFavorite}
    onSelectIconHandler={props.onSelectIconHandler}
    onFavClickHandler={props.onFavClickHandler} />);
    
  return <div className={classes.container}>
    {listItem}
  </div>
}

export default View;