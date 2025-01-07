import Footer from "@shared/companents/Footer"
import { Navbar } from "@shared/companents/Navbar"
import { Home } from "@home/components/Home"

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Home />
        <Footer />
    </>
  )
}

export default HomePage