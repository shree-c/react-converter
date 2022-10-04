import './App.css'
import { useState } from 'react'
import ConversionArea from './components/ConversionArea'
import FormulaNote from './components/FormulaNote'
import MainSelect from './components/MainSelect'

const conversionCategories = ['mass', 'distance', 'temperature']

const conversionUnits = {
  [conversionCategories[0]]: ['kg', 'g', 'mg', 'lb'],
  [conversionCategories[1]]: ['km', 'm', 'mi', 'ft', 'in'],
  [conversionCategories[2]]: ['k', 'c', 'f']
}

function App() {
  const [selectedCategory, setselectedCategory] = useState('temperature')
  const handleMainSelectChange = (e) => {
    setselectedCategory(e.target.value)
  }
  return (
    <div className="App">
      <MainSelect categories={conversionCategories} selectedCategory={selectedCategory} onChange={handleMainSelectChange} />
      <ConversionArea subunits={conversionUnits[selectedCategory]} />
      <FormulaNote formula={'formula comes here'} />
    </div>
  )
}

export default App
