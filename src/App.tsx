// Import TSX file
import Header from "./assets/components/Header.tsx"
import Main from "./assets/components/Main.tsx"
import Footer from "./assets/components/Footer.tsx"
// Import CSS file
import './App.css'
import "./assets/style/Main.css"
import "./assets/style/NavBar.css"
import "./assets/style/Footer.css"
import "./assets/style/Members.css"
// Import react file
import { useState } from "react"

function App() {
  const [statusNow, setstatus] = useState<boolean>(true)
  return (
    <>
     <Header statusNow={statusNow} setstatus={setstatus}/>
     <Main statusNow ={statusNow}/>
     <Footer/>
    </>
  )
}

export default App
