const MainSelect = ({ categories, selectedCategory, onChange }) => {
  return (
    <div>
      <select value={selectedCategory} onChange={onChange}>
        {categories.map((unit, index) => {
          return <option key={index}>{unit}</option>
        })}
      </select>
    </div>
  )
}

export default MainSelect
