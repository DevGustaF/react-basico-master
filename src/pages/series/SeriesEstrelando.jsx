import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesEstrelando = () => {

    const [estreias, setEstreias] = useState([])

    useEffect(() => {

        apiFilmes.get('/tv/airing_today?language=pt-BR').then(resultado => {
            setEstreias(resultado.data.results)
        })

    }, [])

  return (
    <div>
        <h1>Estreando Hoje!</h1>

        <Row>
            {estreias.map(item => (
                <Col key={item.id} md={3} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.original_name}</Card.Text>
                            <Card.Text>Popularidade: {item.popularity}</Card.Text>
                            <Link className="btn btn-danger" to={'/series/' + item.id}>
                                Ver Detalhes
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
              ))
            }
        </Row>
    </div>
  )
}

export default SeriesEstrelando