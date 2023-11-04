import $host from './index'

export const registration = async (login, password) => {
  const response = await $host.post('api/user/registration', {
    login,
    password,
    balance: 100,
  })
  // console.log(response.data.login)
  localStorage.setItem('response', response.data.login)
  localStorage.setItem('balance', response.data.balance)
  return response
}

export const logIn = async (login, password) => {
  const response = await $host.post('api/user/login', { login, password })
  // console.log(response.data.login)

  localStorage.setItem('response', response.data.login)
  localStorage.setItem('balance', response.data.balance)

  return response
}
