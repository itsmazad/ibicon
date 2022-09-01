import { Link } from "react-router-dom";
import DoFavorite from "./DoFavorite";
import DoUnFavorite from "./DoUnFavorite";

import classes from './Card.module.css';

function Card(props) {
  const item = props.data;
  return <div className={classes.card}>
    <Link to={`/view/${item.id}`}>
      <img className={classes.imglink} alt={item.title} src={item.icon} />
    </Link>
    <div className={classes.info}>
      <div className={classes.detail}>
        <div className={classes.title}>{item.name}</div>
        <div className={classes.types}>{item.types.join(', ')}</div>
      </div>
      <div className={classes.action}>
        { item.isFavorite && 
          <DoUnFavorite className={classes.title} id={item.id} />
        }
        { !item.isFavorite && 
          <DoFavorite className={classes.types} id={item.id} />
        }
      </div>
    </div>
  </div>
}

export default Card;