import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'


export function New(){

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/"><FiArrowLeft />back</Link>
                        <h1>New Movie</h1>
                    </header>

                    <div>
                        <Input placeholder="Title" />

                        <Input placeholder="Ranking (0-5)" />
                    </div>


                    <div>
                        <Textarea placeholder="Comments" />
                    </div>

                    <Section title="Markers">
                        <div className='tags'>
                            <MovieItem value="Drama"/>
                            <MovieItem value="Family"/>
                            <MovieItem value="Scifi"/>
                            <MovieItem isNew placeholder="New marker" />
                        </div>
                    </Section>

                    <div>
                        <Button className='del' title="Delete" />
                        <Button title="Save" />
                    </div>

                </Form>
            </main>
        </Container>
    )
}