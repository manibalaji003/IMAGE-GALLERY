
import { Navbar,Image,Container } from 'react-bootstrap'
import logo from '../assets/logogalleryappbg.png'


const Header = () => {
  return (
    <div>
         <Navbar expand="lg"  style={{backgroundColor:'rgb(11, 1, 65)'}}>
      <Container className="d-flex align-item-center" >
      <Navbar.Brand href="#" className="d-flex justify-content-center align-item-center" style={{color:'white'}} >
        <Image src={logo}   width="30"
              height="30"
              className="d-inline-block align-top"/>
        <h3>MyGallery</h3></Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header