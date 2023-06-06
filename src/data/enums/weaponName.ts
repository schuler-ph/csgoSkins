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
  SSG08 = "SSG 08",
  P90 = "P90",
  FIVE7 = "Five-SeveN",
  MP9 = "MP9",
  DUALIES = "Dual Berettas",
  NOVA = "Nova",
  SCAR = "SCAR-20",
  TEC9 = "Tec-9",
  FAMAS = "FAMAS",
  P250 = "P250",
  CZ = "CZ75-Auto",
  P2000 = "P2000",
  NEGEV = "Negev",
  UMP = "UMP-45",
  MAG7 = "MAG-7",
  SAWEDOFF = "Sawed-Off",
  MAC10 = "MAC-10",
}

export const reverseMapping = (weaponName: string) => {
  switch (weaponName) {
    case "AK-47":
      return WeaponName.AK47
    case "AWP":
      return WeaponName.AWP
    case "Desert Eagle":
      return WeaponName.DEAGLE
    case "Glock-18":
      return WeaponName.GLOCK
    case "USP-S":
      return WeaponName.USP
    case "M4A1-S":
      return WeaponName.M4A1
    case "SG 553":
      return WeaponName.SG553
    case "AUG":
      return WeaponName.AUG
    case "MP7":
      return WeaponName.MP7
    case "SSG 08":
      return WeaponName.SSG08
    case "P90":
      return WeaponName.P90
    case "Five-SeveN":
      return WeaponName.FIVE7
    case "MP9":
      return WeaponName.MP9
    case "Dual Berettas":
      return WeaponName.DUALIES
    case "Nova":
      return WeaponName.NOVA
    case "SCAR-20":
      return WeaponName.SCAR
    case "Tec-9":
      return WeaponName.TEC9
    case "FAMAS":
      return WeaponName.FAMAS
    case "P250":
      return WeaponName.P250
    case "CZ75-Auto":
      return WeaponName.CZ
    case "P2000":
      return WeaponName.P2000
    case "Negev":
      return WeaponName.NEGEV
    case "UMP-45":
      return WeaponName.UMP
    case "MAG-7":
      return WeaponName.MAG7
    case "Sawed-Off":
      return WeaponName.SAWEDOFF
    case "MAC-10":
      return WeaponName.MAC10
    default:
      return WeaponName.UNKNOWN
  }
}
