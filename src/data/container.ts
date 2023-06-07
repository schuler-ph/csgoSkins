import type { ContainerType } from "./enums/containerType"
import type { SkinTemplate } from "./skins"

export interface Container {
  id: string
  name: string
  image: string
  type: ContainerType
  firstSale: string
  description: string
  contains: SkinTemplate[]
  containsRare: SkinTemplate[]
}
