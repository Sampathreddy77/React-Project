import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDNALoader from '../Loader/dna -loader';
import CustomSpinner  from '../Loader/infy-spin';
import CustomToast from '../Toast/toast';
import CustomInstaHeart from '../Instaheart/insta-heart';

function CustomCard({title,text,location}) {
  return (
    <Card style={{width:'18rem'}}>
      
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
          {text}
          <CustomDNALoader height={"100"} width={"100"} />
          <CustomSpinner/>
          <CustomToast/>
          <CustomInstaHeart/>
        </Card.Text>
        <Card.Text>
          {location}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;