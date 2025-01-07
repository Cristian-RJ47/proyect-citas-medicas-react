import Footer from "@shared/companents/Footer"
import { Navbar } from "@shared/companents/Navbar"
import { Edit } from "@edit/components/Eddit/Edit"
import style from "@edit/EditPage.module.css"

const EditPage = () => {
  return (
    <>
        <Navbar />
          <section className={style.container}>
            <Edit/>
          </section>
        <Footer />
    </>
  )
}

export default EditPage