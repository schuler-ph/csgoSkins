import { Grade } from "@/data/enums/grade"

export const floatToGrade = (float: number) => {
  if (float < 0.07) {
    return Grade.FN
  } else if (float >= 0.07 && float < 0.15) {
    return Grade.MW
  } else if (float >= 0.15 && float < 0.38) {
    return Grade.FT
  } else if (float >= 0.38 && float < 0.45) {
    return Grade.WW
  } else {
    return Grade.BS
  }
}
