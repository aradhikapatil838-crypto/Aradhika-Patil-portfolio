import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import ElderlyMedicationCaseStudy from './pages/ElderlyMedicationCaseStudy'
import SbiRedesignCaseStudy from './pages/SbiRedesignCaseStudy'
import SummerInternshipCaseStudy from './pages/SummerInternshipCaseStudy'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/summer-internship" element={<SummerInternshipCaseStudy />} />
        <Route path="/work/elderly-medication" element={<ElderlyMedicationCaseStudy />} />
        <Route path="/work/orbicare" element={<ElderlyMedicationCaseStudy />} />
        <Route path="/work/sbi-redesign" element={<SbiRedesignCaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
