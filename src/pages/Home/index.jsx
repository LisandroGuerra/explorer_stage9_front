import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewMovie } from './styles'

import { Header } from '../../components/Header'

import { Movie } from '../../components/Movie'
import { Section } from '../../components/Section'


export function Home() {

    return (
        <Container>

            <Header />
                <div>
                    <h1>My movies</h1>

                    <NewMovie to="/new">
                        <FiPlus />
                        Create Movie
                    </NewMovie>
                </div>
            <Content>
                
                <Section>
                    <Movie data={{
                        title: 'Interestellar',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }} 
                    />
               </Section>    

                <Section>
                    <Movie data={{
                        title: 'Interestellar',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }} 
                    />
                </Section>

                <Section>
                    <Movie data={{
                        title: 'Interestellar',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }} 
                    />
               </Section>

            </Content>


        </Container>
        
    )
}