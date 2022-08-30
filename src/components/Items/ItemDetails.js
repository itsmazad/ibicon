import DoFavorite from "./DoFavorite";
import DoUnFavorite from "./DoUnFavorite";

import classes from './ItemDetails.module.css';

function ItemDetails(props) {
  const item = props.data; 

  return <div className={classes.details}>
    <img alt={item.title} src={item.image} />
    
    <div className={classes.info}>
      <div className={classes.detail}>
        <div className={classes.name}>{item.name}</div>
      </div>
      <div className={classes.detail}>
        <div className={classes.types}>{item.types.join(", ")}</div>
      </div>
      <div className={classes.action}>
        { item.isFavorite && 
          <DoUnFavorite id={item.id} />
        }
        { !item.isFavorite && 
          <DoFavorite id={item.id} />
        }
      </div>
      <div className={classes.action}>
        <audio controls>
          <source src={item.sound} />
        Your browser does not support the audio element.
        </audio>
      </div>
      <div className={classes.action}>
        <span>Max CP:</span>{item.maxCP}
        <span>Max HP:</span>{item.maxHP}
      </div>
      <div className={classes.action}>
        <div>Weight</div>
        {item.weight.minimum}-{item.weight.maximum}
      </div>
      <div className={classes.action}>
        <div>Height</div>
        {item.height.minimum}-{item.height.maximum}
      </div>
    </div>
  </div>
}

export default ItemDetails;