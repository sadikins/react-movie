import {useState, useEffect} from 'react'
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from 'axios'

const Trending = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
      }
    }).then((response)=> {
      console.log("datas => ", response.data.results)
      setMovies(response.data.results)
    }) 
  })

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          {movies.map((result, index)=>{
            return (
            <Col md={4} className="movieWrapper d-flex bg-dark" id="trending" key={index}>
              <Card className="movieImage">
                <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt={result.title} className="images" />
                <div className="bg-dark">
                  <Card.Body className='text-white'>
                    <Card.Title className="text-center">{result.title}</Card.Title>
                    <Card.Text className="text-left flex-fill">
                      {result.overview}
                    </Card.Text>
                    <Card.Text className="text-left flex-fill">
                      {result.release_date}
                    </Card.Text>
                  </Card.Body>
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

export default Trending