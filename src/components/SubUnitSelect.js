const SubUnitSelect = ({ subUnits, selectedSubunit, onChange }) => {
  return (
    <div>
      <select value={selectedSubunit} onChange={onChange}>
        {
          subUnits.map(
            (unit, index) => {
              return <option key={index}>{unit}</option>
            })
        }
      </select>
    </div>
  )
}

export default SubUnitSelect
