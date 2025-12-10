import Header from './components/Header'
import Hero from './components/Hero'
import Accomplishments from './components/Accomplishments'
import Infrastructure from './components/Infrastructure'
import Community from './components/Community'
import Vision from './components/Vision'
import GetInvolved from './components/GetInvolved'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-egret-white">
      <Header />
      <main>
        <Hero />
        <Accomplishments />
        <Infrastructure />
        <Community />
        <Vision />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  )
}
