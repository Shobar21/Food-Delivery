import React from 'react'
import trash from '../Imges/trash.svg'
import '../Style/cart.css'
import { useDispatchCart, useStateCart } from './ContextReducer'

export default function Cart() {
  const data = useStateCart()
  const dispatch = useDispatchCart()

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem('userEmail')
    try {
      const response = await fetch('http://localhost:5000/api/orderData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      })

      console.log('Order Response:', response)
      if (response.ok) {
        dispatch({ type: 'DROP' })
        alert('Order placed successfully!')
      } else {
        console.error('Failed to place order')
        alert('Failed to place order, please try again.')
      }
    } catch (error) {
      console.error('Error during checkout:', error)
      alert('Server error, please try again later.')
    }
  }

  const handleDelete = (index) => {
    dispatch({ type: 'REMOVE', index: index })
  }

  const totalPrice = data.reduce(
    (total, food) => total + food.price * food.quantity,
    0
  )

  if (data.length === 0) {
    return (
      <div className='m-5 w-100 text-center fs-3' style={{ color: '#6c757d' }}>
        Your cart is empty!
      </div>
    )
  }

  return (
    <div
      className='container m-auto mt-5 table-responsive main-content'
      style={{ background: 'none' }}
    >
      <table className='data table table-hover'>
        <thead className='fs-4'>
          <tr>
            <th scope='col' className='heading-table'>
              #
            </th>
            <th scope='col' className='heading-table'>
              Name
            </th>
            <th scope='col' className='heading-table'>
              Quantity
            </th>
            <th scope='col' className='heading-table'>
              Option
            </th>
            <th scope='col' className='heading-table'>
              Amount
            </th>
            <th scope='col' className='heading-table'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <th scope='row' className='heading-table'>
                {index + 1}
              </th>
              <td className='heading-table'>{food.name}</td>
              <td className='heading-table'>{food.quantity}</td>
              <td className='heading-table'>{food.size}</td>
              <td className='heading-table'>${food.price * food.quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(index)}
                  className='btn btn-sm'
                >
                  <img src={trash} alt='Delete' width='30' className='delete' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ background: 'transparent' }}>
        <h1 className='fs-2'>Total Price: ${totalPrice}/-</h1>
      </div>

      <div
        className='purple btn bg-white mx-2'
        onClick={handleCheckOut}
        style={{ cursor: 'pointer' }}
      >
        Check Out
      </div>
    </div>
  )
}
