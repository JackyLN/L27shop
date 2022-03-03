import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemCard(props) {

//https://i.picsum.photos/id/257/200/200.jpg?hmac=k0qf_n518If39xOB7qmdqgZZNQ38WdbfQXdF30TSPCw"
  
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.itemImage} />
      <Card.Body>
        <Card.Title>{props.itemName}</Card.Title>
        <Card.Text>
            {props.itemPrice}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemCard;
