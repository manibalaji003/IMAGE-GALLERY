import {Button,Container, Form,Card} from 'react-bootstrap'
import { useRef,useState,useEffect, useCallback} from 'react'
import axios from 'axios'
import {motion} from 'framer-motion'
import Header from '../Components/Header'




const Mainpage = () => {

  const [images, setImages] = useState([]);
 
  
    const searchInput=useRef(null);

  const API_URL ="https://api.unsplash.com/search/photos"
  const IMAGES_PER_PAGE = 30;

  const fetchImages = useCallback( async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );

      setImages(data.results);
     

      console.log('data', data);
    } catch (error) {
      console.log(error);
    }
  },[])
  

  


const resetSearch = () =>{
  
  fetchImages()
}

    const handlesearch = (e)=>{
      e.preventDefault();
      if( !searchInput.current.value){
        resetSearch()
      }else{
        alert("Please Enter valid input");
      }
     

    }






    useEffect(() => {
      fetchImages();
    }, [fetchImages]);



    const handleSelection = (selection) => {
      searchInput.current.value = selection;
      resetSearch()

    };

  return (
    <>
     
            <Header />     
            <div  className='searchcontainer'>
              <h2>Image Search</h2>
              <Container className='d-flex justify-content-center p-4'>
              <Form  onSubmit={handlesearch}>
                  <Form.Control  type='search'  className='searchbox'   placeholder='Type something to search...'  ref={searchInput}/>
              </Form>
              <Button className='searchbutton Button'    onClick={handlesearch}><i className="bi bi-search"></i></Button>

              </Container>
              <div className='filters'>
        <div  className='filtercontent'   onClick={() => handleSelection('nature')} >Nature</div>
        <div  className='filtercontent'    onClick={() => handleSelection('birds')}>Birds</div>
        <div  className='filtercontent'  onClick={() => handleSelection('cats')} >Cats</div>
        <div  className='filtercontent' onClick={() => handleSelection('shoes')}>Shoes</div>
        <div  className='filtercontent'   onClick={() => handleSelection('food')} >Food</div>
        <div  className='filtercontent'    onClick={() => handleSelection('sports')}>sports</div>
        <div  className='filtercontent'  onClick={() => handleSelection('cricket')} >Cricket</div>
        <div  className='filtercontent' onClick={() => handleSelection('football')}>Football</div>
      </div>
            </div>

            <div  className='imagecontainer'>

            {images.map((image,index) => (
              <motion.div key={index}  className='imgsubcon'    initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 520,
                damping: 20
              }} >
             
              
                    <Card className='imagescon'>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        
        <Card.Text>
        {image.alt_description}
        </Card.Text>
              <b>Author</b>:{image.user.first_name}
      </Card.Body>
      <Card.Footer  className='d-flex justify-content-center'>
        <Container className='imagefooter'>
        <span><i className="bi bi-heart"></i>&nbsp;{image.likes}     </span>
      <a href ={image.links.download}> <Button variant="primary" className='Button '>View</Button> </a> 
      
      </Container>
       </Card.Footer> 
    </Card>
                  
                   
                   {image.username}
                    </motion.div>
                    ))}
                   
            </div>
        
      </>
  
  )
}

export default Mainpage