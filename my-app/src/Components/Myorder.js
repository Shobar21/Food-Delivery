import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavComp from './NavComp'

export default function MyOrder() {
  const [orderData, setorderData] = useState([])

  // Fetch orders
  const fetchMyOrder = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/myOrderData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail'),
        }),
      })
      const response = await res.json()
      setorderData(response.orderData?.order_data || [])
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }

  useEffect(() => {
    fetchMyOrder()
  }, [])

  return (
    <div>
      <NavComp />
      <div className='container mt-5'>
        {orderData.length > 0 ? (
          orderData
            .slice(0)
            .reverse()
            .map((order, index) => (
              <div key={index} className='mb-5'>
                {order[0]?.Order_date && (
                  <div className='m-auto mt-5 text-light'>
                    Order Date:{' '}
                    {new Date(order[0].Order_date).toLocaleDateString()}
                    <hr />
                  </div>
                )}
                <div className='row'>
                  {order.map((item, idx) =>
                    item.Order_date ? null : (
                      <div className='col-12 col-md-6 col-lg-4 mb-4' key={idx}>
                        <div
                          className='card'
                          style={{
                            width: '100%',
                            maxHeight: '420px',
                            backgroundColor: '#2b2b2b',
                            borderRadius: '10px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                          }}
                        >
                          <img
                            src={item.img}
                            className='card-img-top'
                            alt={item.name}
                            style={{
                              height: '150px',
                              objectFit: 'cover',
                              borderTopLeftRadius: '10px',
                              borderTopRightRadius: '10px',
                            }}
                          />
                          <div className='card-body text-light'>
                            <h5 className='card-title'>{item.name}</h5>
                            <div className='d-flex  align-items-center mt-3'>
                              <span className='m-2 badge color fs-6 text-white p-2'>
                                {item.quantity}
                              </span>
                              <span className='m-2 badge color fs-6 text-white p-2'>
                                {item.size}
                              </span>
                              <span className='badge color fs-5'>
                                ₹{item.price}/-
                              </span>
                            </div>
                            {/* <div className='text-center mt-3'>
                              <span className='badge color fs-5'>
                                ₹{item.price}/-
                              </span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))
        ) : (
          <h5 className='text-center text-light'>No Orders Found</h5>
        )}
      </div>
      <Footer />
    </div>
  )
}
