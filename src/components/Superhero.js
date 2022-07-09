import {useEffect, useState} from 'react'
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from 'axios'

const SuperHero = () => {

  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`,{
      params:{
        api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((response)=>{
      // console.log(response)
      setFilms(response.data.results)
    })
  })

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>

          {films.map((result, index)=>{
            return (

            
            <Col md={4} className="movieWrapper" id="superhero" key={index}>
            <Card className="movieImage">
              <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt={result.title} className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">{result.title}</Card.Title>
                  <Card.Text className="text-left">
                    {result.overview.substring(0, 150)}...
                  </Card.Text>
                  <Card.Text className="text-left">
                    {result.release_date}
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          )
          })}
          
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero