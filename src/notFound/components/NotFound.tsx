import { Navbar } from "@shared/companents/Navbar"
import style from '@notFound/components/NotFound.module.css'

export const NotFound = () => {
    return (
      <>
          <Navbar />
          <div className={style.body}>
              <div className={style.container}>
                  <h1>404 - Page Not Found</h1>
                  <p>Oops! The page you are looking for doesn't exist.</p>
              </div>
          </div>
          
      </>
    )
  }