import { Container } from './styles'
import { Tag } from '../Tag'
import { Stars } from '../Stars'


export function Movie({data, ...rest}){

    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Stars rating={4}/>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam voluptatibus odit cumque expedita nulla beatae fugiat repellat veniam ad sint labore, sequi eum velit placeat sed facere et quo!
            </p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}