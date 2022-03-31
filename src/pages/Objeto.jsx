import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Objeto = () => {

  const carros = [
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: "https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg" },
    { marca: 'Ford', modelo: 'Ka', cor: 'Azul', ano: 2021, foto: "https://s2.glbimg.com/OebKUtxhXZmEWF-f5TTS5psAZAk=/0x0:1890x1511/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/m/l2zUnsSuyutv5V0ziOzA/ka100anos-1.jpg" },
    { marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 1999, foto: "https://duartemultimarcas.com.br/carros/c48a54590cc8dc9886a16b226657f042-thumbjpg-chevrolet-celta-8569091-1000-750-70.jpg" },
    { marca: 'GM', modelo: 'Corsa', cor: 'Prata', ano: 2002, foto: "https://imganuncios.mitula.net/medium/chevrolet_corsa_2008_flex_chevrolet_corsa_mpfi_classic_sedan_spirit_1_0_8v_prata_20072008_2040113628514380246.jpg" },
    { marca: 'VW', modelo: 'Gol', cor: 'Vermelho', ano: 2022, foto: "https://i.ytimg.com/vi/oKc7hJrmUyQ/maxresdefault.jpg" },
    { marca: 'Ford', modelo: 'Fiesta', cor: 'Preto', ano: 2021, foto: "https://motorshow.com.br/wp-content/uploads/sites/2/2015/07/img-364474-new-fiesta-sport.jpg" },
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: "https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg" },
    { marca: 'Ford', modelo: 'Ka', cor: 'Azul', ano: 2021, foto: "https://s2.glbimg.com/OebKUtxhXZmEWF-f5TTS5psAZAk=/0x0:1890x1511/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/m/l2zUnsSuyutv5V0ziOzA/ka100anos-1.jpg" },
    { marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 1999, foto: "https://duartemultimarcas.com.br/carros/c48a54590cc8dc9886a16b226657f042-thumbjpg-chevrolet-celta-8569091-1000-750-70.jpg" },
    { marca: 'GM', modelo: 'Corsa', cor: 'Prata', ano: 2002, foto: "https://imganuncios.mitula.net/medium/chevrolet_corsa_2008_flex_chevrolet_corsa_mpfi_classic_sedan_spirit_1_0_8v_prata_20072008_2040113628514380246.jpg" },
    { marca: 'VW', modelo: 'Gol', cor: 'Vermelho', ano: 2022, foto: "https://i.ytimg.com/vi/oKc7hJrmUyQ/maxresdefault.jpg" },
    { marca: 'Ford', modelo: 'Fiesta', cor: 'Preto', ano: 2021, foto: "https://motorshow.com.br/wp-content/uploads/sites/2/2015/07/img-364474-new-fiesta-sport.jpg" },
  ]

  return (
    <div>

      <h1>Objeto</h1>
      <h2>Carros</h2>

      <Row>
        {carros.map(item => (
          <Col md={3}>
            <Card>
              <Card.Img height={200} variant="top" src={item.foto} />
              <Card.Body>
                <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                <Card.Text><strong>Cor:</strong> {item.cor}</Card.Text>
                <Card.Text><strong>Ano:</strong> {item.ano}</Card.Text>
                <Button variant="danger">Ver Detalhes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>




    </div>
  )
}

export default Objeto