import { useRef } from 'react'

import { BsSearch } from 'react-icons/bs'

import styles from './Search.module.css'

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
  const userNameRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    if (userNameRef.current) {
      loadUser(userNameRef.current.value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && userNameRef.current) {
      loadUser(userNameRef.current.value)
    }
  }

  return (
    <div className={styles.search_container}>
      <h2>Buscar usuário</h2>
      <div className={styles.search_bar}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Digite o nome do usuário"
          ref={userNameRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>
          <BsSearch size={18} />
        </button>
      </div>
    </div>
  )
}

export default Search
