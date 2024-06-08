import { useState } from 'react'

import Search from './components/Search'

import { UserProps } from './types/user'

import styles from './App.module.css'

function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
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
      {user && <div>{user.login}</div>}
    </div>
  )
}

export default App
