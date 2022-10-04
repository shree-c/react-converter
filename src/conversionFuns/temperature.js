const fToc = (f) => {
  return (f - 32) * 5 / 9
}

const cTof = (c) => {
  return (c * 9 / 5) + 32
}

const kToc = (k) => {
  return (+k - 273)
}

const cTok = (c) => {
  return (+c + 273)
}

export { fToc, cTof, kToc, cTok }
