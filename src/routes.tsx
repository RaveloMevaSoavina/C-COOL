import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/authentification/Login'
import Register from './pages/authentification/Register'
import ForgetPassword from './pages/authentification/ForgetPassword'
import {
  LOGIN_PAGE,
  REGISTER_PAGE,
  FORGET_PASSWORD_PAGE,
} from './settings/constants'

type Router = {
  pathname: string
  element: React.ReactNode
}

const routes: Router[] = [
  { pathname: LOGIN_PAGE, element: <Login /> },
  { pathname: REGISTER_PAGE, element: <Register /> },
  { pathname: FORGET_PASSWORD_PAGE, element: <ForgetPassword /> },
]

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ pathname, element }) => {
          return <Route path={pathname} element={element} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
