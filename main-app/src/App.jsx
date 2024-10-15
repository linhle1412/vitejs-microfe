import { Suspense } from 'react'
import { Route, BrowserRouter,Routes } from 'react-router-dom'
import HomePage from './pages/Home'
function App() {
  return <>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
}

export default App
