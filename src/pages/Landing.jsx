import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate=useNavigate()
  return (
    <div className='mt-3'>
      <Row>
        <Col></Col>
        <Col lg={5}>
          <h2>Welcome to <span style={{ color: "orange" }}>Video player</span></h2>
          <p style={{ textAlign: "justify",color:"black" }} className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quae odit numquam dolores quaerat repudiandae id iste quia recusandae quos, obcaecati at vero consequatur
            reiciendis excepturi assumenda dolorem perferendis debitis!</p>
          <button onClick={()=>navigate('/home')} className='btn btn-warning mt-5'>Get Started</button>


        </Col>

        <Col></Col>


        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </Col>



      </Row>

      <h2 className='d-flex justify-content-center align-item-center mt-4'>Features</h2>

      <div className=' container  d-flex justify-content-center align-items-center w-100 mt-5 '>
        <Card className='p-4 ' style={{ width: '22rem',color:"black" }}>
          <Card.Img style={{ width: "100%", height: "300px" }} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='p-4  ms-4' style={{ width: '22rem',color:"black" }}>
          <Card.Img style={{ width: "100%", height: "300px" }} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='p-4 ms-4' style={{ width: '22rem',color:"black" }}>
          <Card.Img style={{ width: "100%", height: "300px" }} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>




      </div>
      <div className='container border border-2 rounded border-primary pt-5 mt-5 mb-5'>
        <Row>
          <Col lg={6} className='text-dark'>
            <h3 className='text-warning fw-bolder'>Simple Fast And Powerful</h3>
            <p><span className='fs-5 fw-bold'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus nulla quod nobis earum ratione nisi corrupti, autem molestias recusandae magnam voluptatum dolor architecto vel exercitationem temporibus eligendi nostrum laudantium.</p>
            <p><span className='fs-5 fw-bold'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus nulla quod nobis earum ratione nisi corrupti, autem molestias recusandae magnam voluptatum dolor architecto vel exercitationem temporibus eligendi nostrum laudantium.</p>
            <p><span className='fs-5 fw-bold'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus nulla quod nobis earum ratione nisi corrupti, autem molestias recusandae magnam voluptatum dolor architecto vel exercitationem temporibus eligendi nostrum laudantium.</p>
          </Col>
          <Col></Col>
          <Col lg={5}>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/rAO8xk2l05Q" title="LIONEL MESSI WINS HIS 8TH BALLON D’OR 🐐" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>

        </Row>

      </div>

    </div>
  )
}

export default Landing