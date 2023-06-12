import homePress from "@/assets/sounds/mainmenu_press_home_01.wav"
import hover from "@/assets/sounds/mainmenu_rollover_01.wav"
import playPress from "@/assets/sounds/mainmenu_press_play.wav"
import inventoryPress from "@/assets/sounds/mainmenu_press_inventory_02.wav"
import sideSlideIn from "@/assets/sounds/sidemenu_slidein_02.wav"
import hoverInventoryItem from "@/assets/sounds/itemtile_rollover_09.wav"
import inspectItem from "@/assets/sounds/inspect_weapon_01.wav"
import caseDrop from "@/assets/sounds/case_drop_01.wav"
import showKnives from "@/assets/sounds/item_showcase_knife_01.wav"
import close from "@/assets/sounds/inventory_item_close_01.wav"
import unlockCase from "@/assets/sounds/case_unlock_01.wav"
import revealBlue from "@/assets/sounds/case_reveal_rare_01.wav"
import revealPurple from "@/assets/sounds/case_reveal_mythical_01.wav"
import revealPinkRed from "@/assets/sounds/case_reveal_legendary_01.wav"
import revealRsi from "@/assets/sounds/case_reveal_ancient_01.wav"
import caseItemScroll from "@/assets/sounds/csgo_ui_crate_item_scroll.wav"
import { useSettingsStore } from "@/stores/settingsStore"

export const sound = (name: string) => {
  const { volume } = useSettingsStore()
  let audio = new Audio()

  switch (name) {
    case "homePress":
      audio = new Audio(homePress)
      break
    case "hover":
      audio = new Audio(hover)
      break
    case "playPress":
      audio = new Audio(playPress)
      break
    case "inventoryPress":
      audio = new Audio(inventoryPress)
      break
    case "sideSlideIn":
      audio = new Audio(sideSlideIn)
      break
    case "hoverInventoryItem":
      audio = new Audio(hoverInventoryItem)
      break
    case "inspectItem":
      audio = new Audio(inspectItem)
      break
    case "caseDrop":
      audio = new Audio(caseDrop)
      break
    case "showKnives":
      audio = new Audio(showKnives)
      break
    case "close":
      audio = new Audio(close)
      break
    case "unlockCase":
      audio = new Audio(unlockCase)
      break
    case "revealBlue":
      audio = new Audio(revealBlue)
      break
    case "revealPurple":
      audio = new Audio(revealPurple)
      break
    case "revealPinkRed":
      audio = new Audio(revealPinkRed)
      break
    case "revealRsi":
      audio = new Audio(revealRsi)
      break
    case "caseItemScroll":
      audio = new Audio(caseItemScroll)
      break
  }

  audio.volume = volume
  audio.play()
}
