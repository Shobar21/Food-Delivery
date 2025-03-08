import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import burger from '../Imges/photo.avif'
import momoes from '../Imges/momos.jpg'
import noodles from '../Imges/momes.avif'
import pics from '../Imges/st.avif'
import '../Style/sidebar.css'
import { useState } from 'react'

function SideBar({ setSearch }) {
  const [find, setFind] = useState('search')
  const seachHandle = () => {
    setSearch(find)
  }
  return (
    <Carousel
      interval={3000}
      pause='hover'
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      <Carousel.Caption
        style={{
          zIndex: '10',
          background: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ marginTop: '-10px', background: 'none' }}>
          <h1 className='mb-5 welcome'>Welcome to our restaurant</h1>
        </div>
        <div className='d-flex w-100' style={{ background: 'none' }}>
          <Form.Control
            type='search'
            value={find}
            onChange={(e) => setFind(e.target.value)}
            placeholder='Search'
            className='me-2 inputfield'
            aria-label='Search'
          />
          <Button className='search' onClick={seachHandle}>
            Search
          </Button>
        </div>
      </Carousel.Caption>

      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{
            width: '80%',
            height: '500px',
            filter: 'brightness(30%)',
          }}
          src={burger}
          alt='First slide'
          loading='lazy'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{
            width: '80%',
            height: '500px',
            filter: 'brightness(30%)',
          }}
          src={momoes}
          alt='Second slide'
          loading='lazy'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{
            width: '80%',
            height: '500px',
            filter: 'brightness(30%)',
          }}
          src={noodles}
          alt='Third slide'
          loading='lazy'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{
            width: '80%',
            height: '500px',
            filter: 'brightness(30%)',
          }}
          src={pics}
          alt='Third slide'
          loading='lazy'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default SideBar
