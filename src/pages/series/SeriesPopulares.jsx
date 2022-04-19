import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesPopulares = () => {

    const [series, setSeries] = useState([])

    useEffect(()=>{

        apiFilmes.get('/tv/popular?language=pt-BR').then(resultado=>{
            setSeries(resultado.data.results)
        })
        }, [])

  return (
    <div>
        <h1>Séries Populares</h1>

        { series.length === 0 && <h1>Carregando... Aguarde</h1>}

        <Row>
        {series.map( item => (
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

export default SeriesPopulares