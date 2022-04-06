
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Objeto = () => {

 
 const carros = [
   {marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: "https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg"},
   {marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 1999, foto: "https://images.noticiasautomotivas.com.br/img/f/2010-1024x768.jpeg"},
   {marca: 'GM', modelo: 'Corsa', cor: 'Vermelho', ano: 2002, foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HO48TrlqV8Wr4SJiItpppIHPBbrG1-b9Dg&usqp=CAU"},
   {marca: 'Nissan', modelo: 'Versa', cor: 'Prata', ano: 2014, foto: "https://cdn.autopapo.com.br/box/uploads/2020/11/30100805/nissan-versa-2021-versao-advance-2-frente-45-prata.jpg"},
   {marca: 'Ford', modelo: 'Ka', cor: 'Azul', ano: 2021, foto: "https://s2.glbimg.com/OebKUtxhXZmEWF-f5TTS5psAZAk=/0x0:1890x1511/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/m/l2zUnsSuyutv5V0ziOzA/ka100anos-1.jpg"},
   {marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: "https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg"},
   {marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 1999, foto: "https://images.noticiasautomotivas.com.br/img/f/2010-1024x768.jpeg"},
   {marca: 'GM', modelo: 'Corsa', cor: 'Vermelho', ano: 2002, foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HO48TrlqV8Wr4SJiItpppIHPBbrG1-b9Dg&usqp=CAU"},
   {marca: 'Nissan', modelo: 'Versa', cor: 'Prata', ano: 2014, foto: "https://cdn.autopapo.com.br/box/uploads/2020/11/30100805/nissan-versa-2021-versao-advance-2-frente-45-prata.jpg"},
   {marca: 'Ford', modelo: 'Ka', cor: 'Azul', ano: 2021, foto: "https://s2.glbimg.com/OebKUtxhXZmEWF-f5TTS5psAZAk=/0x0:1890x1511/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/m/l2zUnsSuyutv5V0ziOzA/ka100anos-1.jpg"}
 ]


  return (
    <div>

      <h1>Objeto</h1>
      <h2>Carros</h2>

<Row>
  {carros.map(item => (
    <Col md = {3} className="mb-3"> 
      <Card>
        <Card.Img variant="top" src={item.foto} />
        <Card.Body>
          <Card.Title>{item.marca} - {item.modelo}</Card.Title>
          <Card.Text><strong>Cor:</strong> {item.cor}</Card.Text>
          <Card.Text><strong>Ano:</strong> {item.ano}</Card.Text>
          <Button variant="danger">Ver detalhes</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

    </div>
  )
}

export default Objeto