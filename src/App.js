import {Routes, Route} from 'react-router-dom'

import Countries from './components/Countries'
import Country from './components/Country'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:countryName" element={<Country />} />
    </Routes>
  )
}

export default App
