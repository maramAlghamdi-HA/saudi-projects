import "../styles/css/Qiddiya.css"
import "../styles/css/bootstrap.min.css"
import "../styles/css/agency.min.css"
import { Container, Carousel } from "react-bootstrap"

function QiddiyaSlider() {
  return (
    <Container fluid className="text-center mt-5 pt-5 pb-5">
      <Carousel fade interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://qiddiya.com/assets/img/home/gallery/photo-2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://qiddiya.com/assets/img/home/gallery/photo-10.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://qiddiya.com/assets/img/home/gallery/photo-1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className=" d-block w-100"
            src="https://qiddiya.com/media/1258/sixflags_map_english.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="https://qiddiya.com/media/1278/sixflag1.jpg" alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="https://qiddiya.com/media/1263/sixflag2.jpg" alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="https://qiddiya.com/media/1266/sixflag5.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default QiddiyaSlider
