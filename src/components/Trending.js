import {useState, useEffect} from 'react'
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from 'axios'

const Trending = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/trending/all/day`, {
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
            <Col md={4} className="d-flex my-3" id="trending" key={index}>
              <Card className="movieImage h-100 bg-dark">
                <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt={result.title} className="images" />
                <div className="bg-dark">
                  <Card.Body className='text-white'>
                    <Card.Title className="text-left">{result.title}</Card.Title>
                    <Card.Text className="h-100">
                      {result.overview.substring(0, 150)}...
                    </Card.Text>
                    <Card.Footer className="text-left h-100">
                      {result.release_date ? result.release_date : result.first_air_date}
                    </Card.Footer>
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