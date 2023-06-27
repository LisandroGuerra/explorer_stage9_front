import { FiSearch } from 'react-icons/fi'
import { Container, Search, Brand, Profile, Logout } from "./styles"

import { Input } from '../../components/Input'



export function Header() {

    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <Input icon={FiSearch} placeholder="Search by title" />
            </Search>

            <Profile to="/profile">
               
                <div>
                    <strong>Lisandro Guerra</strong>
                    <Logout>
                        <span>Logout</span>
                    </Logout>
                </div>

                <img 
                    src="https://github.com/lisandroguerra.png" 
                    alt="User picture"
                />
            
            </Profile>
        </Container>
    )
}