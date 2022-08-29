import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import ItemDetails from '../components/Items/ItemDetails';
import { FetchDetails } from "../services/Characters";
function Item() {
  let { id } = useParams();
  const [itemDetails, setStateDetails] = useState(false);
  FetchDetails(id, setStateDetails);
  return (
    <div>
      <Link to="/">Back</Link>
      { itemDetails === false && <section><p>Loading...</p></section> }
      { itemDetails === null && <section><p>Unknown.</p></section> }
      { itemDetails && itemDetails !== null && <ItemDetails data={itemDetails} /> }
    </div>
  );
}

export default Item;