import Footer from "@shared/companents/Footer";
import { Navbar } from "@shared/companents/Navbar";
import { Show } from "@dashboard/components/Show/Show";
import style from '@dashboard/DashboardPage.module.css'

function DashboardPage() {
  return (
    <>
        <Navbar />
            <section className={style.container}>
                    <Show/>
            </section>
        <Footer />
    </>
  )
}

export default DashboardPage