import type { SkinTemplate } from "@/data/skins"
import { getWeapon } from "@/data/enums/weaponName"
import * as cheerio from "cheerio"
import { Rarity, raritySwitch } from "@/data/enums/rarity"
// import type { Case } from "@/data/case"
import type { KnifeCollection } from "@/data/knifeCollection"

const professionalFetch = (url: string) => {
  url = "http://localhost:4357/?url=" + url
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.text()
      }
      throw new Error("Response faulty")
    })
    .then((html) => {
      return html
    })
    .catch((err) => {
      console.log("Error ", err.message)
    })
}

export const scrape = async (caseUrl: string) => {
  const rawHtml = await professionalFetch(caseUrl)
  const $ = cheerio.load(rawHtml!)

  const caseObj = getCaseInfo($)
  const length = getLength($)
  const rsiContained = getRsiContained($)
  let knifeCollection = null

  if (rsiContained) {
    const knifeSel =
      "body > div.container.main-content > div:nth-child(7) > div:nth-child(1) > div > div.details-link > a"
    const knifeLink = $(knifeSel).attr("href")
    knifeCollection = await getKnifeCollection(knifeLink!)
  }

  // caseObj.knifeCollection = knifeCollection

  for (let i = rsiContained ? 2 : 1; i <= length; i++) {
    const skin = getSkinInfo($, i)
    if (skin === null) {
      continue
    } else {
      // caseObj.skins.push(skin)
    }
  }

  return caseObj
}

const getCaseInfo = ($: cheerio.CheerioAPI) => {
  const caseNameSel =
    "body > div.container.main-content > div:nth-child(3) > div > div.inline-middle.collapsed-top-margin > h1"
  const caseName = $(caseNameSel).text()
  const shortname = caseName.replace(/[: ]/g, "").toLowerCase()

  const caseImageSel =
    "body > div.container.main-content > div:nth-child(3) > div > div:nth-child(1) > a > img"
  let caseImage = $(caseImageSel).attr("src")

  if (caseImage === undefined) {
    const collectionImageSel =
      "body > div.container.main-content > div:nth-child(3) > div > div:nth-child(1) > img"
    caseImage = $(collectionImageSel).attr("src")
  }

  return {
    name: caseName,
    shortname,
    knifeCollection: null,
    imageUrl: caseImage!,
    skins: [] as SkinTemplate[],
  }
}

const getLength = ($: cheerio.CheerioAPI) => {
  const skinsListSel = "body > div.container.main-content > div:nth-child(7)"
  return $(skinsListSel).children("div").length
}

const getRsiContained = ($: cheerio.CheerioAPI) => {
  return (
    $(
      "body > div.container.main-content > div:nth-child(7) > div:nth-child(1) > div > div.quality.color-rare-item > p"
    ).text() === "★ Rare Special Items ★"
  )
}

const getSkinInfo = ($: cheerio.CheerioAPI, i: number) => {
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
  const weaponName = getWeapon(skinHtml.find(skinWeaponSel).text())

  const skinNameSel = "div > h3 > a:nth-child(2)"
  const name = skinHtml.find(skinNameSel).text()

  const skinImageSel = "div > a:nth-child(4) > img"
  const imageUrl = skinHtml.find(skinImageSel).attr("src")

  // return {
  //   name,
  //   rarity,
  //   weaponName,
  //   imageUrl,
  // } as SkinTemplate
}

const getKnifeCollection = async (url: string) => {
  const rawHtml = await professionalFetch(url)
  let $ = cheerio.load(rawHtml!)
  const length = getLength($)

  const knifeCollection: KnifeCollection = {
    name: "one",
    collection: [],
  }

  for (let i = 2; i <= length; i++) {
    const skin = getSkinInfo($, i)
    if (skin === null) {
      continue
    } else {
      // knifeCollection.collection.push(skin)
    }
  }

  const knifeCollection2: KnifeCollection = {
    name: "two",
    collection: [],
  }

  url =
    url +
    "&name=&has_st=1&no_st=1&has_souv=1&no_souv=1&sort=weapon&order=desc&page=2"
  const nextPage = await professionalFetch(url)
  $ = cheerio.load(nextPage!)

  for (let i = 2; i <= length; i++) {
    const skin = getSkinInfo($, i)
    if (skin === null) {
      continue
    } else {
      // knifeCollection2.collection.push(skin)
    }
  }

  console.log(knifeCollection)
  console.log(knifeCollection2)

  return knifeCollection.name
}
