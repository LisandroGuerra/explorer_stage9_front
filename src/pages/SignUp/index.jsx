import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form, Background } from './styles'

import { Button } from '../../components/Button'

import { Input } from '../../components/Input'



export function SignUp(){

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to track everything you watch.</p>

                <h2>Create account</h2>
                <Input 
                    placeholder="Name" 
                    type="text" 
                    icon={FiUser}
                />
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
                <Button title="Register" />

                <Link to="/">
                    <FiArrowLeft />
                    Back to login
                </Link>
            </Form>
            <Background />
        </Container>
    )
}