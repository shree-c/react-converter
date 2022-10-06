import { cTof, cTok, fToc, kToc } from './temperature'
import { kgTog, mgTog, lbTog, gTokg, gTolb, gTomg } from './mass'
import { kmTom, miTom, ftTom, inTom, mTokm, mToin, mToft, mTomi } from './distance.js'
const uselessFun = (v) => v
const toCommonFuns = {
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
  },
  //using meter
  'distance': {
    'km': kmTom,
    'mi': miTom,
    'ft': ftTom,
    'in': inTom,
    'm': uselessFun
  }
}

const fromCommonFuns = {
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
  },
  'distance': {
    'km': mTokm,
    'mi': mTomi,
    'ft': mToft,
    'in': mToin,
    'm': uselessFun,
  }
}

export { toCommonFuns, fromCommonFuns }
