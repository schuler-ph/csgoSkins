import type { ContainerType } from "./enums/containerType"
import type { ItemTemplate } from "./item"
import type { SkinTemplate } from "./skins"

export interface ContainerTemplate extends ItemTemplate {
  type: ContainerType
  firstSale: string
  description: string
  contains: SkinTemplate[]
  containsRare: SkinTemplate[]
}
