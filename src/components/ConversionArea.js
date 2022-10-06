import React from 'react'
import InputEle from './InputEle'
import SubUnitSelect from './SubUnitSelect'
import { fromCommonFuns, toCommonFuns } from '../conversionFuns/commonEntry'


const conversionUnits = {
  'mass': ['kg', 'g', 'mg', 'lb'],
  'distance': ['km', 'm', 'mi', 'ft', 'in'],
  'temperature': ['k', 'c', 'f']
}
class ConversionArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subUnit1: conversionUnits[props.category][0],
      subUnit2: conversionUnits[props.category][0],
      inpVal1: 100,
      inpVal2: 100,
      universalValue: 100
    }
  }
  handleInputChange1 = (e) => {
    this.setState((state, props) => {
      const uV = toCommonFuns[props.category][state.subUnit1](e.target.value)
      return { inpVal1: e.target.value, universalValue: uV, inpVal2: fromCommonFuns[props.category][state.subUnit2](uV) }
    })
  }
  handleInputChange2 = (e) => {
    this.setState((state, props) => {
      const uV = toCommonFuns[props.category][state.subUnit2](e.target.value)
      return { inpVal2: e.target.value, universalValue: uV, inpVal1: fromCommonFuns[props.category][state.subUnit1](uV) }
    })

  }
  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({
        subUnit1: conversionUnits[this.props.category][0],
        subUnit2: conversionUnits[this.props.category][0],
      })
    }
  }
  handleSubUnitChange1 = (e) => {
    this.setState((state, props) => {
      return { subUnit1: e.target.value, inpVal1: fromCommonFuns[props.category][e.target.value](state.universalValue) }
    })
  }
  handleSubUnitChange2 = (e) => {
    this.setState((state, props) => {
      return { subUnit2: e.target.value, inpVal2: fromCommonFuns[props.category][e.target.value](state.universalValue) }
    })
  }
  render() {
    return (
      <div>
        <div>
          <InputEle inpTex={this.state.inpVal1} onChange={this.handleInputChange1} />
          <SubUnitSelect subUnits={conversionUnits[this.props.category]} onChange={this.handleSubUnitChange1} selectedSubunit={this.state.subUnit1} />
        </div>
        <span>=</span>
        <div>
          <InputEle inpTex={this.state.inpVal2} onChange={this.handleInputChange2} />
          <SubUnitSelect subUnits={conversionUnits[this.props.category]} onChange={this.handleSubUnitChange2} selectedSubunit={this.state.subUnit2} />
        </div>
      </div>
    )
  }
}
export default ConversionArea
