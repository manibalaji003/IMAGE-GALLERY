
import { Navbar,Container } from 'react-bootstrap'


const Header = () => {
  return (
    <div>
         <Navbar expand="lg" className="" style={{backgroundColor:'blueviolet'}}>
      <Container >
        <Navbar.Brand href="#" style={{color:'white'}} >MyGallery</Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header