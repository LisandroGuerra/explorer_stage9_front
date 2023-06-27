import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form, Background } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'



export function SignIn(){

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to track everything you watch.</p>

                <h2>Login</h2>
                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail}
                />
                <Input 
                    placeholder="Password" 
                    type="password" 
                    icon={FiLock}
                />
                <Button title="Enter" />

                <Link to="/register">
                    Create account
                </Link>
            </Form>

            <Background />
        </Container>
    )
}