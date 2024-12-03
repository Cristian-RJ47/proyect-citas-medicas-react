import Footer from "../shared/companents/Footer";
import { Navbar } from "../shared/companents/Navbar";

function DashboardPage() {
  return (
    <>
        <Navbar />
        <main>
            <h1>Dashboard</h1>
            <section>
                <h2>Ver Citas</h2>

                <div>
                    <p>tabla con citas</p>
                </div>
            </section>
            <section>
                <h2>Crear Cita</h2>

                <div>
                    <p>formulario de cita</p>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default DashboardPage