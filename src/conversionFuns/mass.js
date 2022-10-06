export const kgTog = (kg) => {
  return (+kg * 1000)
}

export const gTokg = (g) => {
  return (+g * 0.001)
}

export const mgTog = gTokg
export const gTomg = kgTog

export const gTolb = (g) => {
  return (+g / 453.59237)
}

export const lbTog = (lb) => {
  return (+lb * 453.59237)
}

