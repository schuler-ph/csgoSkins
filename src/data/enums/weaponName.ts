export enum WeaponName {
  UNKNOWN = "unkown",
  AK47 = "AK-47",
  AWP = "AWP",
  DEAGLE = "Desert Eagle",
  GLOCK = "Glock-18",
  USP = "USP-S",
  M4A1 = "M4A1-S",
  SG553 = "SG 553",
  AUG = "AUG",
  MP7 = "MP7",
}

export const weaponNameSwitch = (weaponName: string) => {
  const ak47Regex = /\bAK-47\b/i
  const awpRegex = /\bAWP\b/i
  const deagleRegex = /\bDesert Eagle\b/i
  const glockRegex = /\bGlock-18\b/i
  const uspRegex = /\bUSP-S\b/i
  const m4a1Regex = /\bM4A1-S\b/i
  const sg553Regex = /\bSG 553\b/i
  const augRegex = /\bAUG\b/i
  const mp7Regex = /\bMP7\b/i

  if (ak47Regex.test(weaponName)) {
    return WeaponName.AK47
  } else if (awpRegex.test(weaponName)) {
    return WeaponName.AWP
  } else if (deagleRegex.test(weaponName)) {
    return WeaponName.DEAGLE
  } else if (glockRegex.test(weaponName)) {
    return WeaponName.GLOCK
  } else if (uspRegex.test(weaponName)) {
    return WeaponName.USP
  } else if (m4a1Regex.test(weaponName)) {
    return WeaponName.M4A1
  } else if (sg553Regex.test(weaponName)) {
    return WeaponName.SG553
  } else if (augRegex.test(weaponName)) {
    return WeaponName.AUG
  } else if (mp7Regex.test(weaponName)) {
    return WeaponName.MP7
  } else {
    return WeaponName.UNKNOWN
  }
}
