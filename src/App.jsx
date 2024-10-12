import { NavBar } from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import Technologies from "./components/Technologies"

function App() {
  return (
    <div className="pb-10 pt-2 selection:text-cyan-400 selection:bg-yellow-500">
      <div className="mx-4 lg:mx-20">
        <NavBar />
        <HeroSection />
        <ProjectSection />
        <Technologies />
      </div>
    </div>
  )
}

export default App