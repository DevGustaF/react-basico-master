import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cartao = (props) => {

    console.log(props.title)


  return (
    <div>


<Card style={{ width: '18rem' }}className="mb-3">
  <Card.Img variant="top" src={props.imagem} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.children}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


    </div>
  )
}

export default Cartao