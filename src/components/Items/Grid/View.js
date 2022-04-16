import Card from './Card';

import classes from './View.module.css';

function View(props) {
  const listItem = props.data.map((card) => <Card 
    key={card.key} 
    id={card.id} 
    title={card.title} 
    types={card.types} 
    icon={card.icon} 
    favorite={card.favorite}
    onSelectIconHandler={props.onSelectIconHandler}
    onFavClickHandler={props.onFavClickHandler} />);
    
  return <div className={classes.container}>
    {listItem}
  </div>
}

export default View;