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
  const [statusNow, setStatus] = useState<boolean>(true)
  const [modeCard ,setList] = useState<boolean>(true)
  return (
    <>
     <Header statusNow={statusNow} setStatus={setStatus} modeCard={modeCard} setList={setList}/>
     <Main statusNow ={statusNow} modeCard={modeCard}/>
     <Footer/>
    </>
  )
}

export default App
