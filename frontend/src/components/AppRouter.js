import React, { useContext } from 'react'
import { Switch, Route, Redirect, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes.js'
import { CASINO_ROUTE } from '../utils/const.js'
import { Context } from '../index.js'

const AppRouter = () => {
  const { user } = useContext(Context)

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
    </Routes>
  )
}

export default AppRouter
