import { FaHeart, FaRegHeart } from "react-icons/fa"; 

import classes from './Card.module.css';

function Card(props) {
  return <div className={classes.card}>
    <img alt={props.title} src={props.icon} onClick={() => props.onSelectIconHandler(props.id)} />
    <div className={classes.info}>
      <div className={classes.detail}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.types}>{props.types.join(', ')}</div>
      </div>
      <div className={classes.action}>
        { props.favorite && 
            <FaHeart onClick={() => props.onFavClickHandler(props.id, false)} />
        }
        { !props.favorite && 
          <FaRegHeart onClick={() => props.onFavClickHandler(props.id, true)} />
        }
      </div>
    </div>
  </div>
}

export default Card;