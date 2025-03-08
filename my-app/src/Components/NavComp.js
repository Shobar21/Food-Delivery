import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import '../Style/navbar.css'

function NavComp() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }
  return (
    <Navbar className='navbg'>
      <Container className='navbg'>
        <Navbar.Brand as={Link} to='/home' className='fs-1 navbg'>
          FoodGo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='navbg' />
        <Navbar.Collapse id='basic-navbar-nav' className='navbg'>
          <Nav className='me-auto navbg'>
            <Nav.Link className='fs-5 mt-3' as={Link} to='/'>
              Home
            </Nav.Link>
            {localStorage.getItem('authToken') ? (
              <Nav.Link className='fs-5 mt-3' as={Link} to='/'>
                My Orders
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          {!localStorage.getItem('authToken') ? (
            <div className='d-flex' style={{ background: 'none' }}>
              <Link className='purple btn bg-white mx-1' as={Link} to='/login'>
                Login
              </Link>
              <Link
                className=' purple btn bg-white mx-1'
                as={Link}
                to='/signup'
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className='d-flex' style={{ background: 'none' }}>
              <div className=' purple btn bg-white mx-2'>My Cart</div>
              <div
                className=' text-danger btn bg-white mx-2'
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComp
