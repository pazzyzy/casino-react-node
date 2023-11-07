import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes.js'
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
