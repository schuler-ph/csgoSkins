import type { ContainerType } from "./enums/containerType"
import type { ItemTemplate } from "./item"
import type { SkinTemplate } from "./skins"

export interface ContainerTemplate extends ItemTemplate {
  type: ContainerType | null
  firstSale: string | null
  contains: SkinTemplate[]
  containsRare: SkinTemplate[]
}
