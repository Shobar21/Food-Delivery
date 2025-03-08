import React, { useEffect, useState } from 'react'

import NavComp from '../Components/NavComp'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'

function HomePage() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    response = await response.json()
    setFoodItem(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <NavComp />
      <SideBar setSearch={setSearch} />
      <div className='container my-5'>
        {' '}
        {/* Increased margin for better spacing */}
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div key={data.id}>
                <div className='row mb-3'>
                  <div className='col-12 fs-3 text-light'>
                    {data.CategoryName}
                  </div>
                </div>
                <hr className='text-light' />{' '}
                <div className='row row-cols-1 row-cols-md-3 g-5'>
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItem) => {
                        return (
                          <div className='col' key={filterItem._id}>
                            <Cards
                              foodItem={filterItem}
                              // foodName={filterItem.name}
                              options={filterItem.options[0]}
                              // foodCat={filterItem.CategoryName}
                              // imgSrc={filterItem.img}
                            />
                          </div>
                        )
                      })
                  ) : (
                    <div className='text-light'>No such data</div>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <div className='text-light'>Loading...</div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
