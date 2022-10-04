import { useState } from 'react'
import InputEle from './InputEle'
import SubUnitSelect from './SubUnitSelect'
import { cTof, cTok, fToc, kToc } from '../conversionFuns/temperature'

const conversionFunMaptoCommon = {
  'f': fToc,
  'k': kToc,
  'c': (v) => v,
}

const conversionFunMapfromCommon = {
  'f': cTof,
  'k': cTok,
  'c': (v) => v,
}
const ConversionArea = ({ subunits }) => {
  const [universalValue, setuniversalValue] = useState('')
  const [subState1, setSubState1] = useState(subunits[0])
  const [subState2, setSubState2] = useState(subunits[0])
  const handleInputChange1 = (e) => {
    setuniversalValue(conversionFunMaptoCommon[subState1](e.target.value))
  }
  const handleInputChange2 = (e) => {
    setuniversalValue(conversionFunMaptoCommon[subState2](e.target.value))
  }
  const handleSubUnitchange1 = (e) => {
    setSubState1(e.target.value)
  }
  const handleSubUnitchange2 = (e) => {
    setSubState2(e.target.value)
  }
  const inpTex1 = conversionFunMapfromCommon[subState1](universalValue)
  const inpTex2 = conversionFunMapfromCommon[subState2](universalValue)
  return (
    <div>
      <div>
        <InputEle inpTex={inpTex1} onChange={handleInputChange1} />
        <SubUnitSelect subUnits={subunits} selectedSubunit={subState1} onChange={handleSubUnitchange1} />
      </div>
      <span>=</span>
      <div>
        <InputEle inpTex={inpTex2} onChange={handleInputChange2} />
        <SubUnitSelect subUnits={subunits} selectedSubunit={subState2} onChange={handleSubUnitchange2} />
      </div>
    </div>
  )
}

export default ConversionArea
