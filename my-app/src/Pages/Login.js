import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
    const data = await response.json()
    console.log(data)
    if (!data.success) {
      alert('Enter valid credentials')
    } else {
      localStorage.setItem('authToken', data.authToken)
      console.log(localStorage.getItem('authToken'))
      alert('Succesfully Login')
      navigate('/')
    }
  }

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <>
      <div className='container mt-5 d-flex justify-content-center'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              className='inputfield'
              name='email'
              value={credentials.email}
              onChange={onChange}
              type='email'
              placeholder='Enter email'
              required
              style={{ width: '400px' }}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className='inputfield'
              name='password'
              value={credentials.password}
              onChange={onChange}
              type='password'
              placeholder='Enter password'
              required
            />
          </Form.Group>
          <Button type='submit' className='search'>
            Login
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Login
