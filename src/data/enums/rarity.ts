import { WeaponName } from "./weaponName"

export enum Rarity {
  GRAY = "Consumer Grade",
  LIGHTBLUE = "Industrial Grade",
  BLUE = "Mil-spec",
  PURPLE = "Restricted",
  PINK = "Classified",
  RED = "Covert",
  GOLD = "Rare Special Item",
  CONTRABAND = "Contraband",
}

export const raritySwitch = (rarity: string) => {
  const redRegex = /\bCovert\b/i
  const pinkRegex = /\bClassified\b/i
  const purpleRegex = /\bRestricted\b/i
  const blueRegex = /\bMil-spec\b/i
  const lightblueRegex = /\bIndustrial Grade\b/i
  const grayRegex = /\bConsumer Grade\b/i

  if (redRegex.test(rarity)) {
    return Rarity.RED
  } else if (pinkRegex.test(rarity)) {
    return Rarity.PINK
  } else if (purpleRegex.test(rarity)) {
    return Rarity.PURPLE
  } else if (blueRegex.test(rarity)) {
    return Rarity.BLUE
  } else if (lightblueRegex.test(rarity)) {
    return Rarity.LIGHTBLUE
  } else if (grayRegex.test(rarity)) {
    return Rarity.GRAY
  } else {
    return Rarity.CONTRABAND
  }
}

export const getRarityColor = (rarity: Rarity) => {
  switch (rarity) {
    case Rarity.RED:
      return "#eb4b4b"
    case Rarity.PINK:
      return "#d32ee6"
    case Rarity.PURPLE:
      return "#8847ff"
    case Rarity.BLUE:
      return "#4b69ff"
    case Rarity.LIGHTBLUE:
      return "#5e98d9"
    case Rarity.GRAY:
      return "#b0c3d9"
  }
}
