import { WeaponName } from "./enums/weaponName"
import { Rarity } from "./enums/rarity"
import type { ItemTemplate } from "./item"

export interface SkinTemplate extends ItemTemplate {
  rarity: Rarity
  weaponName: WeaponName
  maxFloat: number
  minFloat: number
  paintIndex: string
  pattern: string
  variants: SkinTemplate[]
  canHaveStatTrak: boolean
}

export interface SkinInstance {
  template: SkinTemplate
  float: number
  statTrak: boolean
  price: number
  timestamp: Date
}
