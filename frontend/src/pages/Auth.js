import { useContext, useState } from 'react'
import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { registration, logIn } from '../http/userAPI'
import { CASINO_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await logIn(login, password)
      } else {
        data = await registration(login, password)
      }

      user.setUser(user)
      user.setIsAuth(true)
      user.setBalance(data.data.balance)
      user.setUserName(data.data.login)
      navigate(CASINO_ROUTE)
    } catch (e) {
      alert(e.response.message)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Row className="d-flex justify-content-between mt-3 gx-0">
            {isLogin ? (
              <div>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button
              variant={'outline-success'}
              className="mt-3"
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})
export default Auth
