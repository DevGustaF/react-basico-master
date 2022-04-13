import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesCartaz = () => {

    const [cartaz, setCartaz] = useState([])

    useEffect(()=>{

        apiFilmes.get('movie/now_playing?language=pt-BR').then(resultado=>{
            setCartaz(resultado.data.results)
        })
        

    }, [])

  return (
    <div>
        <h1>Em Cartaz</h1>

        <Row>
        {cartaz.map( item => (
          <Col key={item.id} md={3} className="mb-3">
            <Card title={item.title}>
             <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>
             <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Título Original: {item.original_title}</Card.Text>
                <Card.Text>Popularidade: {item.popularity}</Card.Text>
                <Link className='btn btn-danger' to={'/filmes/' + item.id}>
                  Ver Detalhes
                </Link>
             </Card.Body>
           </Card>
          </Col>
        ))}
      </Row>

   </div>
  )
}

export default FilmesCartaz