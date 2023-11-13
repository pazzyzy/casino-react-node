import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    this._balance = 0
    this._userName = ''
    this._blackJackDeck = []
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }
  setUser(user) {
    this._user = user
  }
  setBalance(balance) {
    this._balance = balance
  }

  setUserName(userName) {
    this._userName = userName
  }

  setBlackJackDeck(blackJackDeck) {
    this._blackJackDeck = blackJackDeck
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

  get balance() {
    return this._balance
  }

  get userName() {
    return this._userName
  }

  get blackJackDeck() {
    return this._blackJackDeck
  }
}
