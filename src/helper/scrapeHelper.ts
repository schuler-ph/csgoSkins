import type { SkinTemplate } from "@/data/skins"
import { weaponNameSwitch } from "@/data/enums/weaponName"
import * as cheerio from "cheerio"
import { Rarity, raritySwitch } from "@/data/enums/rarity"
import type { Case } from "@/data/case"

export const scrape = async (caseUrl: string) => {
  caseUrl = "http://localhost:4357/?url=" + caseUrl
  let rawHtml = ""
  await fetch(caseUrl)
    .then((res) => {
      if (res.ok) {
        return res.text()
      }
      throw new Error("Response faulty")
    })
    .then((html) => {
      rawHtml = html
    })
    .catch((err) => {
      console.log("Error ", err.message)
    })

  const $ = cheerio.load(rawHtml!)

  const caseObj = getCaseInfo($)
  const length = getLength($)
  const rsiContained = getRsiContained($)

  for (let i = rsiContained ? 2 : 1; i <= length; i++) {
    const skin = getSkinInfo($, i)
    if (skin === null) {
      continue
    } else {
      caseObj.skins.push(skin)
    }
  }

  return caseObj
}

export const getCaseInfo = ($: cheerio.CheerioAPI): Case => {
  const caseNameSel =
    "body > div.container.main-content > div:nth-child(3) > div > div.inline-middle.collapsed-top-margin > h1"
  const caseName = $(caseNameSel).text()
  const shortname = caseName.replace(/[: ]/g, "").toLowerCase()

  const caseImageSel =
    "body > div.container.main-content > div:nth-child(3) > div > div:nth-child(1) > a > img"
  const caseImage = $(caseImageSel).attr("src")

  return {
    name: caseName,
    shortname,
    imageUrl: caseImage!,
    skins: [] as SkinTemplate[],
  }
}

export const getLength = ($: cheerio.CheerioAPI) => {
  const skinsListSel = "body > div.container.main-content > div:nth-child(7)"
  return $(skinsListSel).children("div").length
}

export const getRsiContained = ($: cheerio.CheerioAPI) => {
  return (
    $(
      "body > div.container.main-content > div:nth-child(7) > div:nth-child(1) > div > div.quality.color-rare-item > p"
    ).text() === "★ Rare Special Items ★"
  )
}

export const getSkinInfo = ($: cheerio.CheerioAPI, i: number) => {
  const skinSel =
    "body > div.container.main-content > div:nth-child(7) > div:nth-child(" +
    i +
    ")"
  const skinHtml = $(skinSel)

  const skinRaritySel = "div > a.nounderline > div > p"
  let rarity = skinHtml.find(skinRaritySel).text()

  if (!rarity) {
    return null
  }

  rarity = raritySwitch(rarity)

  const skinWeaponSel = "div > h3 > a:nth-child(1)"
  const weaponName = weaponNameSwitch(skinHtml.find(skinWeaponSel).text())

  const skinNameSel = "div > h3 > a:nth-child(2)"
  const name = skinHtml.find(skinNameSel).text()

  const skinImageSel = "div > a:nth-child(4) > img"
  const imageUrl = skinHtml.find(skinImageSel).attr("src")

  return {
    name,
    rarity,
    weaponName,
    imageUrl,
  } as SkinTemplate
}
