import { FaRegHeart } from "react-icons/fa"; 
import { SetFavorite } from "../../services/Characters";

function DoFavorite(props) {
  const id = props.id; 
  const [mutateFunctionFavorite, mutateFavoriteObj] = SetFavorite(id);

  return <FaRegHeart onClick={() => mutateFunctionFavorite(id)} />
}

export default DoFavorite;