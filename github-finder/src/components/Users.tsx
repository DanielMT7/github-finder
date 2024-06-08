import { MdLocationPin } from 'react-icons/md'

import { UserProps } from '../types/user'

import styles from './Users.module.css'

const Users = ({
  avatar_url,
  login,
  location,
  followers,
  following
}: UserProps) => {
  return (
    <div className={styles.user_container}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={styles.stats}>
        <div>
          <p>Seguidores</p>
          <p className={styles.numbers}>{followers}</p>
        </div>

        <div>
          <p>Seguindo</p>
          <p className={styles.numbers}>{following}</p>
        </div>
      </div>
    </div>
  )
}

export default Users
