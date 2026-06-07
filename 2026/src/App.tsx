import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import CV from './routes/CV'
import Portafolio from './routes/Portafolio'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cv/2026" element={<Layout />}>
          <Route index element={<CV />} />
          <Route path="portafolio" element={<Portafolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
