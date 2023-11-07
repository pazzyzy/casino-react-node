import { useContext, useState } from 'react'
import React from 'react'
import { Container, Row, Nav, Button, Image, Form, Col } from 'react-bootstrap'
import dealerLogoPath from '../imgs/croupier.png'
import gamerLogoPath from '../imgs/gamer.png'
import iconChipPath from '../imgs/icon-chip.png'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const BlackjackPage = observer(() => {
  // const responseAuth = {
  //   login: localStorage.getItem('response'),
  //   balance: localStorage.getItem('balance'),
  // }
  const { user } = useContext(Context)
  const [betSize, setBetSize] = useState(0)
  const [playerBalance, setPlayerBalance] = useState(user.balance)
  return (
    <Container
      style={{
        width: '50%',
        height: '500px',
        marginTop: '40px',
      }}
    >
      <Form>
        <Row>
          <Col className="text-center ">
            <Image src={dealerLogoPath} style={{ width: '70px' }} />
            <div> Дилер </div>
          </Col>
          <Col className="text-center ">
            <div> очки диллера </div>
            <div> карты диллера </div>
          </Col>
          <Col className="text-center ">
            <div className="mt-3"> карты диллера </div>
          </Col>
        </Row>
      </Form>

      <Form className="mt-5">
        <Row>
          <Col className="text-center ">
            <Image src={gamerLogoPath} style={{ width: '70px' }} />
            <div className="p "> {user.login} </div>
          </Col>
          <Col className="text-center ">
            <div> очки игрока </div>
            <div> карты игрока </div>
          </Col>
          <Col className="text-center ">
            <div className="mt-3"> карты игрока </div>
          </Col>
        </Row>
      </Form>

      <Form className="mt-5">
        <Row>
          <Col className="text-center ">
            <Image src={iconChipPath} style={{ width: '70px' }} />
            <div> {playerBalance} $ </div>
          </Col>
          <Col className="text-center ">
            <div> {betSize} $</div>
            {''}
            <Button
              onClick={() => {
                setBetSize(betSize - 1)
                setPlayerBalance(user.balance - betSize + 1)
                console.log(betSize)
              }}
              className="px-3 "
              variant="warning"
            >
              {' '}
              -{' '}
            </Button>{' '}
            <Button
              onClick={() => {
                setBetSize(betSize + 1)
                setPlayerBalance(user.balance - (betSize + 1))
                console.log(betSize)
                console.log(playerBalance)
              }}
              className="px-3 "
              variant="success"
            >
              {' '}
              +{' '}
            </Button>
          </Col>
          <Col className="text-center ">
            <Button className="mt-3 " size="lg" variant="danger">
              Игра
            </Button>{' '}
          </Col>
        </Row>
      </Form>

      <Nav className="mt-5"></Nav>
    </Container>
  )
})
export default BlackjackPage
