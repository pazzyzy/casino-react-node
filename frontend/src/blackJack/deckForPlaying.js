function shuffle(deck) {
  let shuffleDeck = []
  for (let i = 1; i <= 4; i++) {
    shuffleDeck = shuffleDeck.concat(deck)
  }

  let currentIndex = shuffleDeck.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = shuffleDeck[currentIndex]
    shuffleDeck[currentIndex] = shuffleDeck[randomIndex]
    shuffleDeck[randomIndex] = temporaryValue
  }
  return shuffleDeck
}

export default shuffle
