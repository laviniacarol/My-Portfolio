import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*container*/
import Home from './containers/Home/home'
import "./styles/GlobalStyles.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
