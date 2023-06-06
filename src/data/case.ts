import type { SkinTemplate } from "./skins"

export interface Case {
  name: string
  shortname: string
  imageUrl: string
  skins: SkinTemplate[]
}
