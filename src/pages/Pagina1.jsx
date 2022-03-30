import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Box from '../components/Box'
import Cartao from '../components/Cartao'

const Pagina1 = () => {
  return (
    <div>

<Box cor="warning" title="Atenção!">
       <p>Obrigado pela atenção!</p>
     </Box>

     <Cartao title="Paisagem" imagem="https://www.bing.com/th?id=OIP.2s6v8hFMcJDkWqc-Un3M8QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
     <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
     </Cartao>
     
     <Container>

  <Card border="danger" style={{ width: '18rem' }} className="mb-3">
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Danger Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}className="mb-3">
  <Card.Img variant="top" src="https://www.bing.com/th?id=OIP.2s6v8hFMcJDkWqc-Un3M8QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}className="mb-3">
  <Card.Img variant="top" src="https://www.bing.com/th?id=OIP.2s6v8hFMcJDkWqc-Un3M8QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}className="mb-3">
  <Card.Img variant="top" src="https://www.bing.com/th?id=OIP.2s6v8hFMcJDkWqc-Un3M8QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</Container> 

    </div>
  )
}

export default Pagina1