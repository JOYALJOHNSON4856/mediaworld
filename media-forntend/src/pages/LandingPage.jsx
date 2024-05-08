import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {

const navigateByUrl = useNavigate()


return (
    <div>
      <Row className='mt-5 align-items-center justify-between w-100 '>
      <Col></Col>

        <Col lg={5}>
          <h1 style={{textAlign:"justify"}}>Welcome To <span className='text-warning'>Media Player</span></h1>
          <p>A Explore a multimedia universe
where users can seamlessly add,
watch, and categorize videos. Our
platform offers a personalized watch
history feature and showcases all
uploaded videos.
          
            </p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
        </Col>
      
        <Col lg={5}>
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>

  <div className='container mb-5 mt-5 d-flex align-item-center justify-content-center flex-column'>
      <h3 style={{textAlign:"center"}}>Features</h3>
      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'> 
   
      <Card className='p-5 bg-info' style={{width:"22rem"}}>
      <Card.Img height={"300px"} width={"300px"} variant="top" src="https://i.pinimg.com/originals/d7/28/26/d728264b7433e62b7c4572c8d129e9be.gif" />
      <Card.Body>
        <Card.Title>Add videos</Card.Title>
        <Card.Text>
         user can add videos by using youtube links
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-5 bg-info' style={{width:"22rem"}}>
      <Card.Img height={"300px"} width={"300px"} variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
      <Card.Body>
        <Card.Title>view  videos</Card.Title>
        <Card.Text>
          users can view added videos in list
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-5 bg-info' style={{width:"22rem"}}>
      <Card.Img height={"300px"} width={"300px"} variant="top" src="https://i.pinimg.com/originals/69/93/cb/6993cb01df77e840ef9cbc0b224882cb.gif" />
      <Card.Body>
        <Card.Title>watch history</Card.Title>
        <Card.Text>
         watch history of all videos are record time stamp
        </Card.Text>
      </Card.Body>
    </Card>
{/* https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif */}
    </div>
    </div>
    <div className='container border rounded p-5 border-secondary mb-5 mt-5 d-flex align-item-center justify-content-between w-100'>
      <div className='col-lg-5'>
        <h3 className='mb-3 text-warning'>Simple Powerful & Fast</h3>
        <h6 className='mb-5'><span className=' fw-bolder text-warning'>Play Everything</span>:
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi corrupti, hic omnis reprehenderit similique in aspernatur, quaerat esse,
         at obcaecati voluptate molestiae ullam explicabo corporis sequi! Beatae, officia. Nostrum.
          
        </h6>

        <h6 className='mb-5'><span className=' fw-bolder text-warning'>Categorize Videos</span>:
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi corrupti, hic omnis reprehenderit similique in aspernatur, quaerat esse,
         at obcaecati voluptate molestiae ullam explicabo corporis sequi! Beatae, officia. Nostrum.
          
        </h6>

        <h6 className='mb-5'><span className='fw-bolder text-warning'>Managing History</span>:
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi corrupti, hic omnis reprehenderit similique in aspernatur, quaerat esse,
         at obcaecati voluptate molestiae ullam explicabo corporis sequi! Beatae, officia. Nostrum.
          
        </h6>



      </div>

      <div className='video col-lg-5'>
        {/* <iframe width="100%" height="315" src="" frameborder="0" title='Jailer'></iframe> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/1F3hm6MfR1k?si=7LSP3TSwCC-66U2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>




    </div>










  </div>
  )
}

export default LandingPage