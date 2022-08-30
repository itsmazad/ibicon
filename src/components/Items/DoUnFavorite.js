import { FaHeart } from "react-icons/fa"; 
import { SetUnFavorite } from "../../services/Characters";

function DoUnFavorite(props) {
  const id = props.id; 
  const [mutateUnFunctionFavorite, mutateUnFavoriteObj] = SetUnFavorite(id);

  return <FaHeart onClick={() => mutateUnFunctionFavorite(id)} />
}

export default DoUnFavorite;