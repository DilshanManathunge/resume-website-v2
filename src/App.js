import "./App.css"
import Navbar from "./components/navbar/Navbar"
import ContactPage from "./views/contact/ContactPage"
import Homepage from "./views/home/Homepage"
import IntroPage from "./views/intro/IntroPage"
import ProjectPage from "./views/projects/ProjectPage"
function App() {
  return (
    <div className="bg-gradient-to-r from-bg-grad-purple via-bg-grad-purple to-bg-grad-blue">
      <div className="w-4/5 display-flex mx-auto place-content-center flex-direction-row">
        <Navbar />
        <Homepage />
        <IntroPage />
        <ProjectPage />
      </div>
      {/* <Homepage />
      <IntroPage />
      <ProjectPage />
      <ContactPage /> */}
    </div>
  )
}

export default App
