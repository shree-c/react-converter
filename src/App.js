import './App.css'
import { useState } from 'react'
import ConversionArea from './components/ConversionArea'
import FormulaNote from './components/FormulaNote'
import MainSelect from './components/MainSelect'

const conversionCategories = ['mass', 'distance', 'temperature']



function App() {
  const [category, setCategory] = useState('temperature')
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  return (
    <div className="App">
      <MainSelect categories={conversionCategories} selectedCategory={category} onChange={handleCategoryChange} />
      <ConversionArea category={category} />
      <FormulaNote formula={'formula comes here'} />
    </div>
  )
}

export default App
