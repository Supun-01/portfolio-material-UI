import { NavBar } from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"

function App() {
  return (
    <div className="bg-gray-300 pb-10 pt-2">
      <div className="mx-4 lg:mx-20">
        <NavBar />
        <HeroSection />
        <ProjectSection />
      </div>
    </div>
  )
}

export default App