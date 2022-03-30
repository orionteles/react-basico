import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Box from '../components/Box'
import Cartao from '../components/Cartao'

const Pagina1 = () => {
    return (
        <div>
            <Container>

                <Box title="Erro!" cor="danger">
                    <p>Erro ao executar a operação.</p>
                    <p>Entre em contato com o administrador do sistema</p>
                    <h3>Dados para contato</h3>
                    <p>E-mail: orion@iesb.br</p>
                    <p>telefone: (61) 98765-4321</p>
                </Box>

                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>
                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>
                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>
                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>
                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>
                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>
                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>
                <Box title="Sucesso!">
                    <p>Operação realizada com sucesso.</p>
                </Box>

                <Box cor="info">
                    <p>Esse componente é muito legal</p>
                </Box>

                <Box cor="warning" title="Atenção!">
                    <p>Obrigado pela atenção</p>
                </Box>




                <Cartao titulo="Palmeiras ganhou a libertadores" imagem="https://i.superesportes.com.br/81WRvS0ZqVjw5kHq0bzEibTbpcs=/smart/imgsapp.mg.superesportes.com.br/app/foto_126510467054/2022/02/12/13330/20220212210407264685a.jpg">
                    OK! Mas continua sem mundial...
                </Cartao>

                <Cartao titulo="Vi de tudo na vida" imagem="https://www.lance.com.br/galerias/wp-content/uploads/2022/02/memes-palmeiras-mundial-chelsea-18-1-613x474.jpg">
                    Menos o mundial do Palmeiras
                </Cartao>

                <Cartao titulo="Piada renovada com sucesso" imagem="https://www.lance.com.br/galerias/wp-content/uploads/2022/02/memes-palmeiras-mundial-chelsea-14-1-660x474.jpg">
                    Palmeiras continua sem mundial
                </Cartao>


                <Cartao titulo="Time Bom" imagem="data:image/jpeg;base64,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EREpRQiISihEBftS1LoXtliJjexwcx7TYtcDcEL8UQnS6MyAyvbikHXWZUxACaMb9XZtHzT9h1cCdtXLGAYzJQTsqIHaL4zrG57D2TXDeD/3tXR+TOOx4jAyogOo6nsJ1xyAdc13hH2ggrNtXNtGU63M4/B7hVtqY9Wer4fZ7C8HKzKKPDKd08nXOPWxR3sXyW1eIbydw8wXoYriUdJDJUTuDI423c4/YAN5JsAN5K5yyzylkxOpdM+7Y29bFHe4jjv947Sd/ispu3NpGjWt4HCTiK9Psxr+334oefjGKSVkz6ic6cj3Xcdw4Bo3ACwt4F8KIsHPN1URERlAiIicxERDNKhEQSihEQlFChBkixRARQilSlEUIlKKERCUUIglFCIJRQpRItlyGyrfhdQHi74JLNmjB7Jl+yb/ADDXbzjetZRTEzE5wouUU3KZpqjRLds4+WhxOURQEtpIndYDcGR+zTcN28AHYPHYaUoUpVVNU5yi1aptURRRGiBFCKFaUUIglFCIJRQiCUUIglFCIJRERKEUIilKKEQSihEEooRBKKEQSihEEooRBKKEQSihEEooRBKKEQSihEEooRBKKEQSihEGKIilSIiICIiAiIgKURAREUCERFIIiIClEQFCIglQiICKUQQiIgIiIJREUD//2Q==">
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-primary">Primary</Button>
                </Cartao>


                <h1>Hello World</h1>
                <Button variant="outline-primary">Primary</Button>
            </Container>
        </div>
    )
}

export default Pagina1