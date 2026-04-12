export type Review = {
  name: string
  text: string
  rating: number
  detail?: string
}

export const reviews: Review[] = [
  {
    name: 'Elena M.',
    rating: 5,
    text: 'Lovely, cozy café. Warm and welcoming atmosphere, friendly service, delicious pastries. This is exactly the kind of neighbourhood spot every city needs more of.',
    detail: 'Google Review',
  },
  {
    name: 'Gord T.',
    rating: 5,
    text: 'The options are plentiful, the quality is superb and the prices are right. The little kids spot is an incredible touch — my whole family felt at home.',
    detail: 'Google Review',
  },
  {
    name: 'Roopali S.',
    rating: 5,
    text: 'Vanilla Bean Latte and Vanilla Matcha were both delicious. The Chocolate Cream Cake and Almond Cinnamon Cupcake — so good, not too sweet. Will be back soon.',
    detail: 'Google Review',
  },
  {
    name: 'Elena M.',
    rating: 5,
    text: 'Lovely, cozy café. Warm and welcoming atmosphere, friendly service, delicious pastries. This is exactly the kind of neighbourhood spot every city needs more of.',
    detail: 'Google Review',
  },
  {
    name: 'Gord T.',
    rating: 5,
    text: 'The options are plentiful, the quality is superb and the prices are right. The little kids spot is an incredible touch — my whole family felt at home.',
    detail: 'Google Review',
  },
  {
    name: 'Roopali S.',
    rating: 5,
    text: 'Vanilla Bean Latte and Vanilla Matcha were both delicious. The Chocolate Cream Cake and Almond Cinnamon Cupcake — so good, not too sweet. Will be back soon.',
    detail: 'Google Review',
  },
]
