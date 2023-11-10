import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import { useCallback } from 'react'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'
function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    await loadSlim(engine)
  }, [])
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])
  return (
    <div>
      <Particles
        url='http://foo.bar/particles.json'
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default App

// type='circle'
// params={{
//   Particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 900,
//       },
//     },
//   },
// }}
