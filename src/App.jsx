import React, { useContext } from 'react'
import Head from './Component/Head'
import { usercontext } from './Context/Usercontext'

function App() {
  const { Theme, toggleTheme } = useContext(usercontext)
  console.log(Theme)
  return (
    <div>
      <button onClick={toggleTheme}>toggle theme</button>
      <h1>Current Theme: {Theme}</h1>
      {/*<Head name={name} /> hierarchy method or props b add hogi fun me tb*/}
      <Head />
    </div>
  )
}

export default App
