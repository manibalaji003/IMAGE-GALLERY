import { Container } from "react-bootstrap"


const Footer = () => {
  return (
    <div style={{backgroundColor: "black ",color:'white',position:"absolute",bottom:'0px',width:'100%',padding:'1rem'}}>
        Email:<a href='mailto:manibalaji22003@gmail.com'>Mail</a>
      <Container style={{float:"left"}}>  Created by Mani Balaji</Container>
    </div>
  )
}

export default Footer