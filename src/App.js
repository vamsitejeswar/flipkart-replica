import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import FirebaseValidation from './components/userauth/FirebaseValidation'

const App = ({presentUser}) => {
  return (
    <div>
      <FirebaseValidation/>
    </div>
  )
}

export default App
