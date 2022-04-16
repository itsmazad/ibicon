import { FaHeart, FaRegHeart, FaWindowClose } from "react-icons/fa"; 

import classes from './ItemDetails.module.css';

function ItemDetails(props) {
  const item = props.data; 
  return <div className={classes.details}>
    <h2>
      Details of {item.title}
      <FaWindowClose onClick={() => props.onSelectIconHandler()} />
    </h2>
    <img alt={item.title} src={item.image} />
    <div className={classes.info}>
      <div className={classes.detail}>
        <div className={classes.types}>{item.types}</div>
      </div>
      <div className={classes.action}>
        { item.favorite && 
          <FaHeart onClick={() => props.onFavClickHandler(item.id)} />
        }
        { !item.favorite && 
          <FaRegHeart onClick={() => props.onFavClickHandler(item.id)} />
        }
      </div>
    </div>
  </div>
}

export default ItemDetails;