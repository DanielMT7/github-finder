import { useState } from 'react'

import { UserProps } from './types/user'

import './App.css'

function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    console.log(data)
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
