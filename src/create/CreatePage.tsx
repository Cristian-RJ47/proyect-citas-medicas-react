import Footer from "@shared/companents/Footer"
import { Navbar } from "@shared/companents/Navbar"
import { Create } from "@create/components/Create/Create"
import style from "@create/CreatePage.module.css"

const CreatePage = () => {
  return (
    <>
        <Navbar/>
        <section className={style.container}>
            <Create/>
        </section>
        <Footer/>
    </>
  )
}

export default CreatePage