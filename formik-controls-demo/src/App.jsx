import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrationForm />
    </>
  )
}

export default App
