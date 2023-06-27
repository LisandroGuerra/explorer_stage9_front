import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Form, Avatar } from "./styles"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function Profile(){

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                    Back
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/LisandroGuerra.png" 
                        alt="User picture"
                     />

                     <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                     </label>
                </Avatar>
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
                    placeholder="Current password" 
                    type="password" 
                    icon={FiLock}
                />
                <Input 
                    placeholder="New password" 
                    type="password" 
                    icon={FiLock}
                />
                <Button title="Update" />
            </Form>
        </Container>
    )
}