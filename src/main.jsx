import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontextprovider from './Context/Usercontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontextprovider>

      < App />

    </Usercontextprovider>

  </StrictMode>,
)


















//export const usercontext = createContext()
//let btnName = "click me"

//createRoot(document.getElementById('root')).render(
//<StrictMode>
// {/*<usercontext.Provider value={location}>*/}
// <usercontext.Provider value={{
// name: "Tamanna sharma",
// btnName
//}}>
// < App />
//{/*<App name={btnName} /> hierarchy method*/}

//</usercontext.Provider>
//</StrictMode>,
//) // agr ek hi file se krna ho


