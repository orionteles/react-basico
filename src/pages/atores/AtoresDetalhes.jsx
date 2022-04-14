import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const AtoresDetalhes = () => {

    const params = useParams()
    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])


    useEffect(() => {
        apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get('person/' + params.id + '/movie_credits?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.cast);
        })        
    }, [])

    return (
        <div>
            {!ator.id && <h1>Carregando... Aguarde!</h1>}

            {ator.id &&
                <div>
                    <h1>{ator.name}</h1>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Data de Nascimento </strong>{ator.birthday}</p>
                            <p><strong>Local de Nascimento </strong>{ator.place_of_birth}</p>
                            <p><strong>Biografia </strong>{ator.biography}</p>
                        </Col>
                        <Col md={12} className="mt-3">
                            <h1>Filmes</h1>
                        </Col>
                        <Row>
                            {filmes.map(item => (
                                <Col className="mb-3" md={2} key={item.id}>
                                    <Link to={'/filmes/' + item.id}>
                                        <Card title={item.title}>
                                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
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

export default AtoresDetalhes