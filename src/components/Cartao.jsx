import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {

    console.log(props)

    return (
        <div>
            <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src={props.imagem} />
                <Card.Body>
                    <Card.Title>{ props.titulo }</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cartao