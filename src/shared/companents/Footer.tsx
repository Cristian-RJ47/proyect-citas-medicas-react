import style from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <footer className={style.footer}>
        <p>Created by: <a href="#">The Cristian Corp</a> &copy; 2024 | All Rights Reserved</p>
        <div className={style.socialIcons}>
            <a href="https://www.facebook.com" target="_blank">Facebook</a> |
            <a href="https://www.twitter.com" target="_blank">Twitter</a> |
            <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
        </div>
    </footer>
    </>
  )
}

export default Footer