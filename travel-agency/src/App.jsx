import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingActionButtons from './components/FloatingActionButtons'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Fleet />

      <Packages />

      <Testimonials />

      <ContactForm />

      <Footer />

      <FloatingActionButtons />
    </div>
  )
}

export default App
