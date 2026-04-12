export type MenuItem = {
  name: string
  description?: string
  price: string
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    items: [
      { name: 'House Coffee', price: '$3.50' },
      { name: 'Espresso', price: '$3.50' },
      { name: 'Americano', price: '$4.50' },
      { name: 'Cappuccino', price: '$5.00' },
      { name: 'Latte', price: '$5.00' },
      { name: 'Flat White', price: '$5.00' },
      { name: 'Cold Brew', price: '$5.00' },
      { name: 'Iced Coffee', price: '$5.00' },
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty',
    items: [
      { name: 'Hazelnut Cold Brew', price: '$5.50' },
      { name: 'White Chocolate Matcha', price: '$5.50' },
      { name: 'Iced Vanilla Latte', price: '$5.50' },
    ],
  },
  {
    id: 'tea',
    title: 'Tea & Other',
    items: [
      { name: 'Matcha Latte', price: '$5.00' },
      { name: 'Chai Latte', price: '$5.00' },
      { name: 'London Fog', price: '$5.00' },
      { name: 'Hot Chocolate', price: '$4.50' },
      { name: 'Tea', description: 'Orange Pekoe, Green, or Earl Grey', price: '$3.50' },
    ],
  },
  {
    id: 'pastries',
    title: 'Pastries',
    items: [
      { name: 'Blueberry Cheesecake', price: 'ask' },
      { name: 'Black Forest Cake', price: 'ask' },
      { name: 'Chocolate Cream', price: '$5.00' },
      { name: 'Sweet Cherry Almond Crumble', price: 'ask' },
      { name: 'Blueberry Crumb', price: 'ask' },
      { name: 'Strawberry Matcha Cookie', price: '$5.00' },
      { name: 'Almond Brownie', price: '$4.50' },
      { name: 'Coconut Clusters', price: '$1.50' },
      { name: 'Cookie', price: '$3.50' },
    ],
  },
]

export const menuAddons = [
  { label: 'Flavour add-on', detail: 'Vanilla, Sugar-Free Vanilla, White Chocolate, Hazelnut, Macadamia Nut', price: '+$0.50' },
  { label: 'Milk alternative', detail: 'Lactose-Free, Soy, Oat, Almond', price: '+$0.30' },
]
