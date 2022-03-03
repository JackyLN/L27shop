import CardGroup from 'react-bootstrap/CardGroup';
import ItemCard from '../ItemCard/ItemCard';

function MyCardGroup(props) {
  return(
    <CardGroup>
      <ItemCard itemName="Product1" itemPrice="$10" itemImage="https://i.picsum.photos/id/594/200/300.jpg?hmac=kcNk6N4hJqRhoKUJ8ZeFWLMVV-2_Z5hLfxCFEyrsAx4" />
      <ItemCard itemName="Product1" itemPrice="$10" itemImage="https://i.picsum.photos/id/594/200/300.jpg?hmac=kcNk6N4hJqRhoKUJ8ZeFWLMVV-2_Z5hLfxCFEyrsAx4" />
    </CardGroup>
  )
}

export default MyCardGroup;