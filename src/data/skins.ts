import { WeaponName } from "./enums/weaponName"
import { Rarity } from "./enums/rarity"

export interface SkinTemplate {
  id: string
  rarity: Rarity
  weaponName: WeaponName
  maxFloat: number
  minFloat: number
  name: string
  image: string
}

export interface SkinInstance {
  template: SkinTemplate
  float: number
  statTrak: boolean
  price: number
  // TODO
  // appliedSticker: {
  //   sticker1: Sticker,
  //   sticker2: Sticker,
  //   sticker3: Sticker,
  //   sticker4: Sticker
  // }
}
