import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Nav, Button, Image, Form, Col } from 'react-bootstrap'
import dealerLogoPath from '../imgs/croupier.png'
import gamerLogoPath from '../imgs/gamer.png'
import iconChipPath from '../imgs/icon-chip.png'
import { Context } from '../index'
import shuffle from '../blackJack/deckForPlaying'
import DECK from '../blackJack/deck'
import {
  startGame,
  incrementBid,
  decrimentBid,
  getCard,
  checkPoints,
  alertMessage,
  playerStop,
} from '../blackJack/index'

// import { dealerCard } from '../blackJack'
let gameResult

const BlackjackPage = observer(() => {
  const { user } = useContext(Context)
  const [betSize, setBetSize] = useState(0)

  const [playerBalance, setPlayerBalance] = useState(user.balance)

  const [dealerCard, setDealerCard] = useState([])
  const [dealerPoints, setDealerPoints] = useState(0)

  const [playerCard, setPlayerCard] = useState([])
  const [playerPoints, setPlayerPoints] = useState(0)

  useEffect(() => {
    if (playerPoints === 21) {
      setTimeout(() => {
        user.setBalance(user.balance + 1.5 * betSize)
        alertMessage('Блекджек')
        setDealerPoints(0)
        setDealerCard([])
        setPlayerPoints(0)
        setPlayerCard([])
        setBetSize(0)
      }, 10)
    }
    if (playerPoints > 21) {
      setTimeout(() => {
        user.setBalance(user.balance - betSize)
        alertMessage('Перебор')
        setDealerPoints(0)
        setDealerCard([])
        setPlayerPoints(0)
        setPlayerCard([])
        setBetSize(0)
      }, 10)
    }
  }, [playerPoints, dealerPoints])

  useEffect(() => {
    setPlayerBalance(user.balance - betSize)
  }, [betSize])

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
            <div className="mt-3"> Очки дилера: </div>
            <div className="mt-3"> {dealerPoints} </div>
          </Col>
          <Col className="text-center ">
            <div className="mt-3"> Карты диллера: </div>
            <div className="mt-3"> {dealerCard} </div>
          </Col>
        </Row>
      </Form>

      <Form className="mt-5">
        <Row>
          <Col className="text-center ">
            <Image src={gamerLogoPath} style={{ width: '70px' }} />
            <div> {user.userName} </div>
          </Col>
          <Col className="text-center ">
            <div className="mt-3"> Очки игрока: </div>
            <div className="mt-3"> {playerPoints} </div>
          </Col>
          <Col className="text-center ">
            <div className="mt-3"> Карты игрока: </div>
            <div className="mt-3"> {playerCard} </div>
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
            <div className="mt-3">
              {' '}
              <h5>{betSize} $</h5>
            </div>
            {''}
            {dealerPoints === 0 && (
              <div>
                <Button
                  onClick={() => {
                    if (betSize > 0) {
                      decrimentBid(setBetSize)
                    }
                  }}
                  className="px-3 "
                  variant="warning"
                >
                  {' '}
                  -{' '}
                </Button>
                <Button
                  onClick={() => {
                    if (playerBalance > 0) {
                      incrementBid(setBetSize)
                    }
                    console.log('betSize=', betSize)
                  }}
                  className="px-3 "
                  variant="success"
                >
                  {' '}
                  +{' '}
                </Button>
              </div>
            )}
          </Col>
          <Col className="text-center ">
            {dealerPoints === 0 ? (
              <Button
                onClick={() => {
                  // if (betSize !== 0) {
                  if (betSize !== 0 || betSize === 0) {
                    ////delete BS===0
                    startGame(
                      user,
                      dealerPoints,
                      dealerCard,
                      playerPoints,
                      playerCard,
                      setDealerPoints,
                      setDealerCard,
                      setPlayerPoints,
                      setPlayerCard
                    )
                  } else {
                    alert('Сделайте ставку')
                  }
                }}
                className="mt-4 "
                size="lg"
                variant="danger"
              >
                Игра
              </Button>
            ) : (
              <div>
                <div>
                  <Button
                    onClick={() =>
                      getCard(
                        user,
                        playerPoints,
                        playerCard,
                        setPlayerPoints,
                        setPlayerCard
                      )
                    }
                    className="mt-2 "
                    variant="success"
                  >
                    {' '}
                    Карту
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      playerStop(
                        user,
                        dealerPoints,
                        dealerCard,
                        playerPoints,
                        playerCard,
                        betSize,
                        setBetSize,
                        setDealerCard,
                        setDealerPoints,
                        setPlayerCard,
                        setPlayerPoints
                      )
                    }}
                    className="mt-2 "
                    variant="danger"
                  >
                    Хватит
                  </Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  )
})

export default BlackjackPage
