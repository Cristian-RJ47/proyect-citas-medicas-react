import styles from './Home.module.css'

export const Home = () => {
  return (
    <>
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>medical appointments</h1>
                <p>Welcome to our website!</p>
            </div>
        </div>
    </>
  )
}