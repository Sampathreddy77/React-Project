import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({title,text,location}) {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
          {text}
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