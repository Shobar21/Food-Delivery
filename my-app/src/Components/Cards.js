import Card from 'react-bootstrap/Card'
import food from '../Imges/st.avif'
import { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useStateCart } from './ContextReducer'

function Cards({ options, foodItem }) {
  let priceRef = useRef()
  let dispatch = useDispatchCart()
  let data = useStateCart()
  let option = options
  let priceOption = Object.keys(option)
  let itemFood = foodItem
  const [size, setSize] = useState('')
  const [quty, setQuty] = useState(1)

  const addtoCart = async () => {
    await dispatch({
      type: 'ADD',
      id: foodItem._id,
      name: foodItem.name,
      price: finalPrice,
      quantity: quty,
      size: size,
      img: foodItem.img,
    })
    console.log(data)
  }
  let finalPrice = quty * parseInt(option[size])
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  return (
    <Card
      className='mt-2 shadow'
      style={{
        width: '16rem',
        maxHeight: '420px',
        borderRadius: '12px',
        margin: '0 auto',
        backgroundColor: '#fff',
      }}
    >
      <Card.Img
        variant='top'
        src={itemFood.img}
        style={{
          height: '150px',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />
      <Card.Body>
        <Card.Title className='cardtitle text-light'>
          {itemFood.name}
        </Card.Title>
        <Card.Text className='text-light'>{itemFood.CategoryName}</Card.Text>
        <div className='container w-100'>
          <select
            className='m-2 h-100 rounded color'
            onChange={(e) => setQuty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              )
            })}
          </select>
          <select
            className='m-2 h-100 rounded color'
            ref={priceRef}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOption.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              )
            })}
          </select>
          <div className='m-2 text-light d-inline h-100 rounded fs-6 color'>
            ${finalPrice}/-
          </div>
        </div>
        <hr />
        <button
          className='ms-2 text-light justify-center rounded fs-5 color b-none'
          onClick={addtoCart}
        >
          Add to cart
        </button>
      </Card.Body>
    </Card>
  )
}

export default Cards
