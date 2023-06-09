import { WeaponName } from "./weaponName"

export enum Rarity {
  UNKNOWN = "unknown",
  GRAY = "Consumer Grade",
  LIGHTBLUE = "Industrial Grade",
  BLUE = "Mil-Spec Grade",
  PURPLE = "Restricted",
  PINK = "Classified",
  RED = "Covert",
  GOLD = "Rare Special Item",
  CONTRABAND = "Contraband",
}

export function getRarity(value: string): Rarity {
  const enumKey = Object.keys(Rarity).find(
    (key) => Rarity[key as keyof typeof Rarity] === value
  )
  if (enumKey !== undefined) {
    return Rarity[enumKey as keyof typeof Rarity]
  }
  return Rarity.UNKNOWN
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
