import shuffle from '../blackJack/deckForPlaying'
import DECK from '../blackJack/deck'
import cardStrength from './cardStrength'

const getOneCard = (user) => {
  return user.setBlackJackDeck.shift()
}

export const incrementBid = (setBetSize) => {
  setBetSize((i) => i + 1)
}
export const decrimentBid = (setBetSize) => {
  setBetSize((i) => i - 1)
}

export const startGame = (
  user,
  pointsDealer,
  cardsDealer,
  pointsPlayer,
  cardsPlayer,
  setPointsDealer,
  setCardDealer,
  setPointsPlayer,
  setCardPlayer
) => {
  user.setBlackJackDeck = shuffle(DECK)
  const newCard1 = getOneCard(user)
  const cardPoint1 = cardStrength(newCard1)
  const cardImage1 = `|${newCard1.suit} ${newCard1.value}| `
  const newCard2 = getOneCard(user)
  const cardPoint2 = cardStrength(newCard2)
  const cardImage2 = `|${newCard2.suit} ${newCard2.value}| `
  const newCard3 = getOneCard(user)
  const cardPoint3 = cardStrength(newCard3)
  const cardImage3 = `|${newCard3.suit} ${newCard3.value}| `

  setPointsDealer(pointsDealer + cardPoint1)
  setCardDealer(cardsDealer + cardImage1)

  setPointsPlayer(pointsPlayer + cardPoint2 + cardPoint3)
  setCardPlayer(cardsPlayer + cardImage2 + cardImage3)
}

export const getCard = (user, points, cards, setPoints, setCard) => {
  const newCard = getOneCard(user)
  const cardPoint = cardStrength(newCard)
  const cardImage = `|${newCard.suit} ${newCard.value}| `
  setPoints(points + cardPoint)
  setCard(cards + cardImage)
}

export const playerStop = (
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
) => {
  console.log('playerStop')
  while (dealerPoints < 17) {
    const newCard = getOneCard(user)
    console.log(newCard)
    const cardPoint = cardStrength(newCard)
    console.log(cardPoint)
    const cardImage = `|${newCard.suit} ${newCard.value}| `
    dealerPoints += cardPoint
    dealerCard += cardImage
    setDealerPoints(dealerPoints)
    setDealerCard(dealerCard)
  }

  if (dealerPoints > 21) {
    setTimeout(() => {
      alertMessage('Вы победили!')
      resetToDefault(
        setDealerPoints,
        setDealerCard,
        setPlayerPoints,
        setPlayerCard,
        setBetSize
      )
      user.setBalance(user.balance + betSize)
    }, 100)
    return
  }
  if (dealerPoints === 21) {
    setTimeout(() => {
      alertMessage('Вы проиграли.')
      resetToDefault(
        setDealerPoints,
        setDealerCard,
        setPlayerPoints,
        setPlayerCard,
        setBetSize
      )
      user.setBalance(user.balance - betSize)
    }, 100)
    return
  }
  if (dealerPoints < playerPoints) {
    setTimeout(() => {
      alertMessage('Вы победили!')
      resetToDefault(
        setDealerPoints,
        setDealerCard,
        setPlayerPoints,
        setPlayerCard,
        setBetSize
      )
      user.setBalance(user.balance + 2 * betSize)
    }, 100)
    return
  }
  if (dealerPoints > playerPoints) {
    setTimeout(() => {
      alertMessage('Вы проиграли.')
      resetToDefault(
        setDealerPoints,
        setDealerCard,
        setPlayerPoints,
        setPlayerCard,
        setBetSize
      )
      user.setBalance(user.balance - betSize)
    }, 100)
    return
  }
  if (dealerPoints === playerPoints) {
    setTimeout(() => {
      alertMessage('Ничья')
      resetToDefault(
        setDealerPoints,
        setDealerCard,
        setPlayerPoints,
        setPlayerCard,
        setBetSize
      )
    }, 100)
    return
  }
}

export const alertMessage = (message) => {
  const result = window.confirm(message)
}

const resetToDefault = (
  setDealerPoints,
  setDealerCard,
  setPlayerPoints,
  setPlayerCard,
  setBetSize
) => {
  setDealerPoints(0)
  setDealerCard([])
  setPlayerPoints(0)
  setPlayerCard([])
  setBetSize(0)
}
