import React from 'react'
import { Alert } from 'react-bootstrap'

const Box = (props) => {

    const cor = props.cor ? props.cor : 'success'

    return (
        <div>
            <Alert variant={cor}>
                <strong>{props.title}</strong>
                {props.children}
            </Alert>
        </div>
    )
}

export default Box