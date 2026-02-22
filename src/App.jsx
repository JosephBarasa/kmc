import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Staff from "./components/Staff"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Services />
        <Staff />
        <Footer />
      </main>
    </>
  )
}
