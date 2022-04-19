import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesNoAr = () => {

  const [noar, setNoar] = useState([])

    useEffect(()=>{

        apiFilmes.get('/tv/on_the_air?language=pt-BR').then(resultado=>{
            setNoar(resultado.data.results)
        })
        

    }, [])

  return (
    <div>
      <h1>Séries No Ar</h1>

      <Row>
        {noar.map( item => (
          <Col key={item.id} md={3} className="mb-3">
            <Card title={item.name}>
             <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>
             <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Título Original: {item.original_name}</Card.Text>
                <Card.Text>Popularidade: {item.popularity}</Card.Text>
                <Link className='btn btn-danger' to={'/series/' + item.id}>
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

export default SeriesNoAr