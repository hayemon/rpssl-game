import { Copyright, Result, Scoreboard, Toolbar } from 'components'
import React from 'react'

const MainPage: React.FC = () => {
  return (
    <>
      <Scoreboard />
      <Toolbar />
      <Result />
      <Copyright />
    </>
  )
}

export default MainPage
