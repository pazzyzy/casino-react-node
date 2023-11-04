import React from 'react'
import { Container } from 'react-bootstrap'
import bjTable from '../imgs/classic_blackjack_table.png'

const BlackjackPage = () => {
  return (
    <Container
      style={{
        // backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9dSHL6uPDPYvvOB6RtVy42A_Z2snYMiDSw&usqp=CAU)`,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${bjTable})`,
        width: '100%',
        height: '500px',
        marginTop: '40px',
        // backgroundSize: '800px',
      }}
    >
      BlackjackPage
    </Container>
  )
}

export default BlackjackPage
