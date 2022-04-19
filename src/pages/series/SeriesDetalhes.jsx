import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesDetalhes = () => {

    const params = useParams()

    const [serie, setSerie] = useState({})
    const [atores, setAtores] = useState([])
    const [temporadas, setTemporadas] = useState([])

    useEffect(() => {
        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setSerie(resultado.data)
        })

        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setTemporadas(resultado.data.seasons)
        })

        apiFilmes.get('tv/' + params.id + '/credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
        })
    }, [])

  return (
    <div>
       {!serie.id && <h1>Carregando... Aguarde!</h1>}

{serie.id &&
    <div>
        <h1>{serie.name}</h1>

        <Row>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} />
                </Card>
            </Col>
            <Col md={8}>
                <p><strong>Título Original: </strong>{serie.original_name}</p>
                <p><strong>Popularidade: </strong>{serie.popularity}</p>
                <p><strong>Data de Lançamento: </strong>{serie.first_air_date}</p>
                <p><strong>Gêneros: </strong>
                    {serie.genres.map(item => (
                        <span key={item.id}>{item.name}, </span>
                    ))}
                </p>

                <p><strong>Sinopse: </strong>{serie.overview}</p>

                <Link className='btn btn-primary' to={-1}>Voltar</Link>

            </Col>
            <Col md={12} className="mt-3">
                <h1>Temporadas</h1>
            </Col>
            <Row>
                {temporadas.map(item => (
                    <Col className="mb-3" md={2} key={item.id}>
                            <Card title={item.name}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            </Card>
                    </Col>
                ))}
            </Row>
            <Col md={12} className="mt-3">
                <h1>Atores</h1>
            </Col>
            <Row>
                {atores.map(item => (
                    <Col className="mb-3" md={2} key={item.id}>
                        <Link to={'/atores/' + item.id}>
                            <Card title={item.name}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Row>
    </div>
}
        </div>
  )
}

export default SeriesDetalhes