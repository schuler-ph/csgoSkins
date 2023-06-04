export interface Skin {
  name: string;
  image: string;
  rarity: string;
  price: number;
}

export const skins: Skin[] = [
  {
    name: 'AK-47 | Vulcan',
    image: 'ak47_vulcan.jpg',
    rarity: 'Covert',
    price: 120.50
  },
  {
    name: 'AWP | Dragon Lore',
    image: 'awp_dragon_lore.jpg',
    rarity: 'Covert',
    price: 400.00
  },
  // Weitere Skins ...
];
