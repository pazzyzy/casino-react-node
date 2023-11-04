import Auth from './pages/Auth.js'
import BlackjackPage from './pages/BlackjackPage.js'
import Casino from './pages/Casino.js'
import DepositPage from './pages/DepositPage.js'
import {
  BJ_ROUTE,
  CASINO_ROUTE,
  DEPOSIT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/const.js'

export const publicRoutes = [
  {
    path: CASINO_ROUTE,
    Component: Casino,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: BJ_ROUTE,
    Component: BlackjackPage,
  },
  {
    path: DEPOSIT_ROUTE,
    Component: DepositPage,
  },
]

export const authRoutes = [
  // {
  //   path: CASINO_ROUTE,
  //   Component: Casino,
  // },
  // {
  //   path: DEPOSIT_ROUTE,
  //   Component: DepositPage,
  // },
  // {
  //   path: BJ_ROUTE,
  //   Component: BlackjackPage,
  // },
]
