import { Link } from 'react-router-dom'
import style from '@shared/companents/Navbar.module.css'
import { useState } from 'react';
import { FaHome, FaUserAlt, FaConciergeBell, FaPhoneAlt} from 'react-icons/fa';

export const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={style.header}>
      <Link className={style.logo} to={'/'}>Citas Médicas</Link>

      <nav className={`${style.navbar} ${isOpen ? style.navbar__active : ''}`}>
          <Link className={style.navbar__item} to={'/'}>
            <FaHome className={style.icon} /> Home
          </Link>
          <Link className={style.navbar__item} to={'/dashboard'}>
            <FaUserAlt className={style.icon} /> Dashboard
          </Link>
          <Link className={style.navbar__item} to={'/create'}>
            <FaConciergeBell className={style.icon} /> Cita
          </Link>
          <Link className={style.navbar__item} to={'/contact'}>
            <FaPhoneAlt className={style.icon} /> Contact
          </Link>
        </nav>

        <div className={style.menuIcon} onClick={toggleMenu}>
          <span className={style.menuIcon__bar}></span>
          <span className={style.menuIcon__bar}></span>
          <span className={style.menuIcon__bar}></span>
        </div>
      </header>
    </>
  )
}
