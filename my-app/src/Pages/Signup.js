import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    })
    const data = await response.json()
    console.log(data)
    if (!data.success) {
      alert('Enter valid credentials')
    } else {
      alert('Succesfully Register')
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
          <Form.Group className='mb-3 txt-red'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className='inputfield'
              name='name'
              value={credentials.name}
              onChange={onChange}
              type='text'
              placeholder='Enter name'
              required
              style={{ width: '400px' }}
            />
          </Form.Group>
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
          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              className='inputfield'
              name='location'
              value={credentials.location}
              onChange={onChange}
              type='text'
              placeholder='Enter location'
              required
            />
          </Form.Group>
          <div className='d-flex'>
            <Button type='submit' className='search'>
              Register
            </Button>
            <div className='m-2'>
              Already have an account? <Link to='/login'>Login</Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Signup
