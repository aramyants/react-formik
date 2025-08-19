import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormikContainer from './components/FormikContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormikContainer />
    </>
  )
}

export default App
