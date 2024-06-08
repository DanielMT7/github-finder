import { useState } from 'react'

import Search from './components/Search'
import Users from './components/Users'
import Error from './components/Error'

import { UserProps } from './types/user'

import styles from './App.module.css'

function App() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  const loadUser = async (userName: string) => {
    setError(false)
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${userName}`)

    if (res.status === 404) {
      setError(true)
      return
    }

    const data = await res.json()

    const { avatar_url, login, location, followers, following } = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setUser(userData)
  }

  return (
    <div className={styles.app_container}>
      <h1>Github Finder</h1>
      <Search loadUser={loadUser} />
      {user && <Users {...user} />}
      {error && <Error />}
    </div>
  )
}

export default App
