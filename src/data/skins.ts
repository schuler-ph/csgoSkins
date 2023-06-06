import { WeaponName } from "./enums/weaponName"
import { Rarity } from "./enums/rarity"
import { Grade } from "./enums/grade"

export interface SkinTemplate {
  rarity: Rarity
  weaponName: WeaponName
  name: string
  imageUrl: string
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
