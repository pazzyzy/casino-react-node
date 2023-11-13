import { firstHand } from '../blackJack/index'
import styles from './Button.module.css'

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      Play
    </button>
  )
}

export default Button
