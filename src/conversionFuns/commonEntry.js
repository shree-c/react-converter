import { cTof, cTok, fToc, kToc } from './temperature'
import { kgTog, mgTog, lbTog, gTokg, gTolb, gTomg } from './mass'

const uselessFun = (v) => v
const toFuns = {
  //using celsius as common unit
  'temperature': {
    'f': fToc,
    'k': kToc,
    'c': uselessFun,
  },
  //using gram
  'mass': {
    'kg': kgTog,
    'mg': mgTog,
    'lb': lbTog,
    'g': uselessFun,
  }
}

const fromFuns = {
  'temperature': {
    'f': cTof,
    'k': cTok,
    'c': (v) => v,
  },
  'mass': {
    'kg': gTokg,
    'mg': gTomg,
    'lb': gTolb,
    'g': uselessFun,
  }
}

export { toFuns, fromFuns }
