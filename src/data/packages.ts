export interface Package {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  popular?: boolean;
}

export const packages: Package[] = [
  {
    name: 'Ceramic Coating',
    price: '₹9,999',
    tagline: 'Mirror shine with lasting protection',
    features: [
      'Long-Lasting Shine',
      'UV Protection',
      'Easy Maintenance',
      'Water Beading Effect',
      'Up to 2 Years Warranty'
    ]
  },
  {
    name: 'Paint Protection Film',
    price: '₹49,999',
    tagline: 'Ultimate defense against damage',
    features: [
      'Self-Healing Technology',
      'Stone Chip Protection',
      'UV & Fade Shield',
      'High Gloss or Matte Finish',
      'Premium Grade Film'
    ],
    popular: true
  },
  {
    name: 'Graphene Coating',
    price: '₹11,999',
    tagline: 'Next-gen hydrophobic shield',
    features: [
      'Higher Heat Resistance',
      '5-Year Protection',
      'Scratch Resistance',
      'Advanced Hydrophobic Effect',
      'Superior Durability'
    ]
  }
];
