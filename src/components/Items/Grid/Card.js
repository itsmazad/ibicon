import { Link } from "react-router-dom";
import DoFavorite from "../DoFavorite";
import DoUnFavorite from "../DoUnFavorite";

import classes from './Card.module.css';

function Card(props) {
  return <div className={classes.card}>
    <Link to={`/view/${props.id}`}>
      <img alt={props.title} src={props.icon} />
    </Link>
    <div className={classes.info}>
      <div className={classes.detail}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.types}>{props.types.join(', ')}</div>
      </div>
      <div className={classes.action}>
        { props.isFavorite && 
          <DoUnFavorite id={props.id} />
        }
        { !props.isFavorite && 
          <DoFavorite id={props.id} />
        }
      </div>
    </div>
  </div>
}

export default Card;