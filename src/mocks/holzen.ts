export const heroSlides = [
  {
    type: 'image' as const,
    src: '/Hogar/images/hero1.jpg',
  },
  {
    type: 'image' as const,
    src: '/Hogar/images/hero3.jpg',
  },
  {
    type: 'video' as const,
    src: '/Hogar/videos/hero5.mp4',
  },
  {
    type: 'video' as const,
    src: '/Hogar/videos/heroo.mp4',
  },
];

export interface Producer {
  name: string;
  location: string;
  story: string;
  image: string;
}

export interface Product {
  id: string;
  tag: string;
  stock: number;
  rating: number;
  overlayName: string;
  overlayOrigin: string;
  overlayPrice: string;
  detailTag: string;
  detailName: string;
  notes: string;
  specs: { label: string; value: string }[];
  image: string;
  priceNum: number;
  priceLabel: string;
  ctaLabel: string;
  producer: Producer & { storyTitle: string };
}

export const products: Product[] = [
  {
    id: 'chuncho',
    tag: 'Variedad Nativa',
    stock: 3,
    rating: 4.9,
    overlayName: 'Caturra Canchaque',
    overlayOrigin: 'Canchaque, Huancabamba · 1,200 msnm',
    overlayPrice: 'desde $7.10 / kg',
    detailTag: 'Canchaque · Huancabamba · Piura',
    detailName: 'Caturra Washed',
    notes: 'Frutas rojas · Jazmín · Panela',
    specs: [
      { label: 'Variedad', value: 'Caturra nativo' },
      { label: 'Proceso', value: 'Lavado 72h' },
      { label: 'Altitud', value: '1,200 msnm' },
      { label: 'Humedad', value: '≤ 7%' },
      { label: 'Precio', value: '$7.10 / kg' },
    ],
    image: '/Hogar/images/product1.jpeg',
    priceNum: 28,
    priceLabel: '$28.00/kg',
    ctaLabel: 'Quiero beber su café',
    producer: {
      name: 'Lucía Quispe',
      location: 'Canchaque, Huancabamba',
      storyTitle: 'El renacer de Lucía',
      story: 'A los 19 años, una helada arrasó con toda su cosecha en una sola noche. Sin crédito, sin seguro, sin nadie que la respaldara, Lucía decidió no rendirse. Aprendió sola el proceso de lavado observando a sus vecinos y leyendo lo que encontraba. Tres años después, su Caturra Washed es el más solicitado por tostadoras especializadas en Alemania y Países Bajos.',
      image: '/Hogar/images/farmer1.jpg',
    },
  },
  {
    id: 'bourbon',
    tag: 'Microlote',
    stock: 5,
    rating: 4.8,
    overlayName: 'Bourbon Rojo Natural',
    overlayOrigin: 'Montero, Ayabaca · 1,500 msnm',
    overlayPrice: 'desde $6.40 / kg',
    detailTag: 'Montero · Ayabaca · Piura',
    detailName: 'Bourbon Natural',
    notes: 'Ciruela · Chocolate negro · Miel',
    specs: [
      { label: 'Variedad', value: 'Bourbon Rojo' },
      { label: 'Proceso', value: 'Natural 10 días' },
      { label: 'Altitud', value: '1,600 msnm' },
      { label: 'Humedad', value: '≤ 7%' },
      { label: 'Precio', value: '$6.40 / kg' },
    ],
    image: '/Hogar/images/product2.jpeg',
    priceNum: 24,
    priceLabel: '$24.00/kg',
    ctaLabel: 'Quiero beber su café',
    producer: {
      name: 'Edilberto Rojas',
      location: 'Montero, Ayabaca',
      storyTitle: 'El despertar de Edilberto',
      story: 'Volvió de las fuerzas armadas con las manos vacías y una parcela abandonada. Durante dos años trabajó solo convirtiendo ese terreno en 3 hectáreas de cafetal. Su Bourbon Natural financió la educación universitaria de sus cuatro hijos.',
      image: '/Hogar/images/farmer2.jpeg',
    },
  },
  {
    id: 'monzon',
    tag: 'Selección Especial',
    stock: 2,
    rating: 5.0,
    overlayName: 'Monzón Heritage',
    overlayOrigin: 'Sicchez, Ayabaca · 1,800 msnm',
    overlayPrice: 'desde $6.30 / kg',
    detailTag: 'Sicchez · Ayabaca · Piura',
    detailName: 'Honey Amarillo',
    notes: 'Durazno · Caña · Madera dulce',
    specs: [
      { label: 'Variedad', value: 'Caturra Amarillo' },
      { label: 'Proceso', value: 'Honey 7 días' },
      { label: 'Altitud', value: '900 msnm' },
      { label: 'Humedad', value: '≤ 7.5%' },
      { label: 'Precio', value: '$6.30 / kg' },
    ],
    image: '/Hogar/images/product3.jpeg',
    priceNum: 22,
    priceLabel: '$22.00/kg',
    ctaLabel: 'Quiero beber su café',
    producer: {
      name: 'Rosa Panduro',
      location: 'Sicchez, Ayabaca',
      storyTitle: 'La fuerza de Rosa',
      story: 'Madre soltera de tres hijos, heredó una deuda y una parcela que nadie quería tocar. Hoy produce uno de los cafés Honey más complejos del Perú, exportando directamente a Europa.',
      image: '/Hogar/images/farmer3.jpeg',
    },
  },
];

export interface Farmer {
  tag: string;
  tagIcon: string;
  name: string;
  location: string;
  story: string;
  image: string;
  index: string;
  stat: string;
  statLabel: string;
}

export const farmers: Farmer[] = [
  {
    tag: 'Cusco',
    tagIcon: 'ri-seedling-line',
    name: 'Segundo Herrera',
    location: 'Cusco · 1,400 msnm',
    story: 'Productor de café de especialidad en Cusco. Apostó por mantener la variedad nativa cuando todos cambiaban a híbridos, convencido de que el café fino peruano merecía llegar al mundo con su nombre y su historia.',
    image: '/Hogar/images/farmer4.jpeg',
    index: '01',
    stat: '100%',
    statLabel: 'café de especialidad nativo',
  },
];

export const processSteps = [
  {
    n: '01',
    icon: 'ri-seedling-line',
    title: 'Cultivo',
    subtitle: 'Café de especialidad de altura',
    desc: 'Café cultivado en altitudes de 1,200-1,800m en los valles del Cusco.',
    tags: ['Café', '1,200-1,800m'],
    image: '/Hogar/images/segundo-work.jpeg',
    color: '#c9a96e',
  },
  {
    n: '02',
    icon: 'ri-hand-heart-line',
    title: 'Cosecha',
    subtitle: 'Recolección a mano',
    desc: 'Recolección manual y selectiva por nuestros productores. Solo los frutos en su punto exacto de madurez.',
    tags: ['100% Manual', 'Selectiva'],
    image: '/Hogar/images/rosa-work.jpeg',
    color: '#a07850',
  },
  {
    n: '03',
    icon: 'ri-flask-line',
    title: 'Fermentación',
    subtitle: 'Proceso artesanal',
    desc: 'Proceso artesanal de 24 a 72 horas en cajones de madera. El tiempo y la paciencia despiertan el aroma del café.',
    tags: ['24-72 horas', 'Artesanal'],
    image: '/Hogar/images/carmen-work.jpeg',
    color: '#d4a853',
  },
  {
    n: '04',
    icon: 'ri-sun-line',
    title: 'Secado',
    subtitle: 'Sol andino',
    desc: 'Secado solar en camas africanas elevadas. Sin secado artificial que altere el perfil sensorial del grano.',
    tags: ['Solar', 'Camas africanas'],
    image: '/Hogar/images/family-segundo.jpeg',
    color: '#8b6340',
  },
];
