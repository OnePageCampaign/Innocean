import { Outlet } from 'react-router-dom'

import GlobalStyle from './style/GlobalStyle'
import { MobileContainer } from './style/MobileStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <MobileContainer>
        <Outlet />
      </MobileContainer>
    </>
  )
}

export default App
