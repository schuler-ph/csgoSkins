export enum ContainerType {
  Case = "Case",
  Souvenir = "Souvenir",
  StickerCapsule = "Sticker Capsule",
  AutographCapsule = "Autograph Capsule",
  Graffiti = "Graffiti",
  Pins = "Pins",
  MusicKitBox = "Music Kit Box",
  PatchCapsule = "Patch Capsule",
}

export function getContainerType(value: string | null): ContainerType | null {
  const enumKey = Object.keys(ContainerType).find(
    (key) => ContainerType[key as keyof typeof ContainerType] === value
  )
  if (enumKey !== undefined) {
    return ContainerType[enumKey as keyof typeof ContainerType]
  }
  return null
}
