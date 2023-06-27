
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, Content } from "./styles.js"

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Stars } from '../../components/Stars'


export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

        <Link to="/">
            <FiArrowLeft />
            Back
        </Link>

        <div>
          <h1>Interestellar</h1>          
          <Stars rating={4}/>
        </div>       

          <div>
            <strong>
                <img src="https://github.com/LisandroGuerra.png" alt="User picture"/>
                Por Lisandro Guerra
            </strong>
            <strong>
                <FiClock className='clock'/>
                23/06/2023 às 13:57
            </strong>
          </div>

          <div>
            <Tag title="Family" />
            <Tag title="Drama" />
            <Tag title="Scifi" />
          </div>

          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta vel vero officiis sapiente autem, aliquam corporis 
              modi provident, aspernatur repudiandae a nostrum hic eos incidunt. 
              Asperiores perspiciatis sunt assumenda. Placeat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta vel vero officiis sapiente autem, aliquam corporis 
              modi provident, aspernatur repudiandae a nostrum hic eos incidunt. 
              Asperiores perspiciatis sunt assumenda.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Minus deserunt dolorum 
              sed! Rerum laboriosam sapiente harum, delectus 
              nisi minima inventore recusandae assumenda 
              dolorum quaerat hic fuga repellat libero ad porro.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta vel vero officiis sapiente autem, aliquam corporis 
              modi provident, aspernatur repudiandae a nostrum hic eos incidunt. 
              Asperiores perspiciatis sunt assumenda.
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Minus deserunt dolorum 
              sed! Rerum laboriosam sapiente harum, delectus 
              nisi minima inventore recusandae assumenda 
              dolorum quaerat hic fuga repellat libero ad porro.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta vel vero officiis sapiente autem, aliquam corporis 
              modi provident, aspernatur repudiandae a nostrum hic eos incidunt. 
              Asperiores perspiciatis sunt assumenda.
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Minus deserunt dolorum 
              sed! Rerum laboriosam sapiente harum, delectus 
              nisi minima inventore recusandae assumenda 
              dolorum quaerat hic fuga repellat libero ad porro.         
            </p>
         

        </Content>
      </main>

    </Container>
    
  )
}