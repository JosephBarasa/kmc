import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Staff from "./components/Staff"
import About from "./components/About"
import Contact from "./components/Contact"
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
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
