import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'holderjs'
import { useNavigate } from 'react-router-dom'
import { BJ_ROUTE, REGISTRATION_ROUTE } from '../utils/const'
import UserStore from '../store/UserStore'
import { Context } from '../index'

const Casino = () => {
  const navigate = useNavigate()
  // const isAuth = new UserStore()
  // isAuth._isAuth = true
  // console.log(isAuth._isAuth)
  const { user } = useContext(Context)

  return (
    <Container>
      <h1 className="p-lg-3 ">ИГРЫ:</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://lh6.googleusercontent.com/pkFUGzgTbAOuOQ5joKSzjGYjq7enNbsaKJhSY-X2-GS8IBTDxVIxxq6us2-9_bJcgR4xEWcpkd3b0UI_sk45Ij0dt-AYB7L5FifmmZ596j1nd94I4PCd6NAEEY5of237txihI2xRDplJ056FxwP40KU"
        />
        <Card.Body>
          <Card.Title>Блекджек</Card.Title>
          <Card.Text>
            Попробуй свои силы в безумной и завораживающей игре. Бонус 100$ при
            регистрации!
          </Card.Text>
          <Button
            variant="primary"
            onClick={
              // isAuth._isAuth
              user.isAuth
                ? () => navigate(BJ_ROUTE)
                : () => navigate(REGISTRATION_ROUTE)
            }
          >
            Играть
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Casino
