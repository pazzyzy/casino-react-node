import React, { useContext } from 'react'

import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { CASINO_ROUTE, LOGIN_ROUTE } from '../utils/const'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setIsAuth(false)
    navigate(CASINO_ROUTE)
  }
  const responseAuth = {
    login: localStorage.getItem('response'),
    balance: localStorage.getItem('balance'),
  }
  console.log(responseAuth)

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={CASINO_ROUTE}>
          <h4>CASINO</h4>
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <div className="p-2">Добро пожаловать {responseAuth.login}</div>

            <Button variant={'outline-light'} className="ms-2">
              Депозит
            </Button>
            <Button
              variant={'outline-light'}
              className="ms-2"
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
