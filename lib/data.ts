// Données mockées pour la plateforme OSC Connect

export interface OSC {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  sector: string;
  description: string;
  image: string;
  members: number;
  projects: number;
  founded: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  logo: string;
  tags: string[];
  coordinates: [number, number];
  recentProjects: {
    name: string;
    description: string;
    status: 'active' | 'completed' | 'planned';
    budget: string;
  }[];
}

export interface Opportunity {
  id: string;
  title: string;
  type: 'financing' | 'training' | 'event' | 'partnership';
  organization: string;
  description: string;
  amount?: string;
  deadline: string;
  location: string;
  image: string;
  tags: string[];
}

export interface Post {
  id: string;
  oscId: string;
  author: string;
  authorAvatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  type: 'project' | 'success' | 'opportunity' | 'news';
}

export const oscs: OSC[] = [
  {
    id: '1',
    name: 'Centre d\'Initiatives pour le Développement et la Paix (CIDP)',
    country: 'Cameroun',
    countryFlag: '🇨🇲',
    sector: 'Paix & Gouvernance',
    description: 'Organisation pionnière dans la promotion de la paix, de la démocratie et du développement durable en Afrique centrale.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    members: 245,
    projects: 12,
    founded: '1995',
    website: 'www.cidp-cameroun.org',
    email: 'contact@cidp-cameroun.org',
    phone: '+237 677 123 456',
    address: 'Douala, Cameroun',
    logo: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    tags: ['Paix', 'Gouvernance', 'Dialogue', 'Formation'],
    coordinates: [4.0511, 9.7679],
    recentProjects: [
      {
        name: 'Forum Afrique-Europe',
        description: 'Dialogue entre jeunes leaders africains et européens',
        status: 'active',
        budget: '75,000€'
      },
      {
        name: 'Dialogue Inter-religieux',
        description: 'Promotion de la coexistence pacifique',
        status: 'active',
        budget: '25,000€'
      }
    ]
  },
  {
    id: '2',
    name: 'Green Belt Movement',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    sector: 'Environnement',
    description: 'Mouvement environnemental qui autonomise les communautés, en particulier les femmes, à conserver l\'environnement.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    members: 1200,
    projects: 25,
    founded: '1977',
    website: 'www.greenbeltmovement.org',
    email: 'info@greenbeltmovement.org',
    phone: '+254 20 123 4567',
    address: 'Nairobi, Kenya',
    logo: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    tags: ['Environnement', 'Femmes', 'Reforestation', 'Développement'],
    coordinates: [-1.2921, 36.8219],
    recentProjects: [
      {
        name: 'Reforestation des Collines',
        description: 'Plantation de 50,000 arbres dans les zones dégradées',
        status: 'active',
        budget: '120,000€'
      },
      {
        name: 'Autonomisation des Femmes Rurales',
        description: 'Formation et micro-crédit pour 500 femmes',
        status: 'completed',
        budget: '80,000€'
      }
    ]
  },
  {
    id: '3',
    name: 'Médecins d\'Afrique',
    country: 'Mali',
    countryFlag: '🇲🇱',
    sector: 'Santé',
    description: 'Organisation médicale dédiée à l\'amélioration de l\'accès aux soins de santé de qualité dans les zones rurales.',
    image: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
    members: 89,
    projects: 8,
    founded: '2001',
    website: 'www.medecins-afrique.org',
    email: 'contact@medecins-afrique.org',
    phone: '+223 20 12 34 56',
    address: 'Bamako, Mali',
    logo: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
    tags: ['Santé', 'Médecine', 'Rural', 'Prévention'],
    coordinates: [12.6392, -8.0029],
    recentProjects: [
      {
        name: 'Santé Maternelle',
        description: 'Amélioration des soins prénatals et postnatals',
        status: 'active',
        budget: '65,000€'
      },
      {
        name: 'Lutte contre le Paludisme',
        description: 'Distribution de moustiquaires et sensibilisation',
        status: 'active',
        budget: '45,000€'
      }
    ]
  },
  {
    id: '4',
    name: 'EduAfrica',
    country: 'Sénégal',
    countryFlag: '🇸🇳',
    sector: 'Éducation',
    description: 'Promotion de l\'éducation inclusive et de la formation numérique pour tous en Afrique de l\'Ouest.',
    image: 'https://images.pexels.com/photos/5088026/pexels-photo-5088026.jpeg',
    members: 156,
    projects: 15,
    founded: '2005',
    website: 'www.eduafrica.sn',
    email: 'info@eduafrica.sn',
    phone: '+221 33 123 45 67',
    address: 'Dakar, Sénégal',
    logo: 'https://images.pexels.com/photos/5088026/pexels-photo-5088026.jpeg',
    tags: ['Éducation', 'Numérique', 'Formation', 'Jeunesse'],
    coordinates: [14.7167, -17.4677],
    recentProjects: [
      {
        name: 'Alphabétisation Numérique',
        description: 'Formation aux outils numériques pour 1000 adultes',
        status: 'active',
        budget: '90,000€'
      },
      {
        name: 'Écoles Connectées',
        description: 'Équipement numérique de 50 écoles rurales',
        status: 'planned',
        budget: '150,000€'
      }
    ]
  },
  {
    id: '5',
    name: 'Women Empowerment Hub',
    country: 'Ghana',
    countryFlag: '🇬🇭',
    sector: 'Genre & Droits humains',
    description: 'Centre de ressources pour l\'autonomisation des femmes et la promotion de l\'égalité des genres.',
    image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    members: 198,
    projects: 18,
    founded: '2010',
    website: 'www.womenempowerment.gh',
    email: 'hello@womenempowerment.gh',
    phone: '+233 24 123 4567',
    address: 'Accra, Ghana',
    logo: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    tags: ['Femmes', 'Droits', 'Leadership', 'Entrepreneuriat'],
    coordinates: [5.6037, -0.1870],
    recentProjects: [
      {
        name: 'Leadership Féminin',
        description: 'Formation de 200 femmes leaders',
        status: 'active',
        budget: '75,000€'
      },
      {
        name: 'Micro-Finance Femmes',
        description: 'Programme de crédit pour 500 entrepreneures',
        status: 'active',
        budget: '200,000€'
      }
    ]
  },
  {
    id: '6',
    name: 'Africa Youth Network',
    country: 'Nigeria',
    countryFlag: '🇳🇬',
    sector: 'Jeunesse & Innovation',
    description: 'Réseau continental pour l\'autonomisation des jeunes africains et l\'innovation technologique.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    members: 850,
    projects: 22,
    founded: '2012',
    website: 'www.africayouthnetwork.org',
    email: 'connect@africayouthnetwork.org',
    phone: '+234 803 123 4567',
    address: 'Lagos, Nigeria',
    logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    tags: ['Jeunesse', 'Innovation', 'Tech', 'Entrepreneuriat'],
    coordinates: [6.5244, 3.3792],
    recentProjects: [
      {
        name: 'Tech4Africa Bootcamp',
        description: 'Formation intensive en développement web',
        status: 'active',
        budget: '100,000€'
      },
      {
        name: 'Startup Weekend Africa',
        description: 'Événement continental d\'entrepreneuriat',
        status: 'planned',
        budget: '180,000€'
      }
    ]
  },
  {
    id: '7',
    name: 'Ubuntu Cultural Foundation',
    country: 'Afrique du Sud',
    countryFlag: '🇿🇦',
    sector: 'Culture & Patrimoine',
    description: 'Préservation et promotion du patrimoine culturel africain à travers l\'art et l\'éducation.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    members: 320,
    projects: 16,
    founded: '1998',
    website: 'www.ubuntu-foundation.org.za',
    email: 'info@ubuntu-foundation.org.za',
    phone: '+27 11 123 4567',
    address: 'Johannesburg, Afrique du Sud',
    logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    tags: ['Culture', 'Art', 'Patrimoine', 'Éducation'],
    coordinates: [-26.2041, 28.0473],
    recentProjects: [
      {
        name: 'Festival des Arts Africains',
        description: 'Célébration de la diversité culturelle africaine',
        status: 'planned',
        budget: '250,000€'
      },
      {
        name: 'Archives Numériques',
        description: 'Digitalisation du patrimoine oral africain',
        status: 'active',
        budget: '120,000€'
      }
    ]
  },
  {
    id: '8',
    name: 'Food Security Initiative',
    country: 'Éthiopie',
    countryFlag: '🇪🇹',
    sector: 'Agriculture & Sécurité Alimentaire',
    description: 'Initiative pour améliorer la sécurité alimentaire et promouvoir l\'agriculture durable en Afrique de l\'Est.',
    image: 'https://images.pexels.com/photos/2933521/pexels-photo-2933521.jpeg',
    members: 145,
    projects: 11,
    founded: '2008',
    website: 'www.foodsecurity-ethiopia.org',
    email: 'contact@foodsecurity-ethiopia.org',
    phone: '+251 11 123 4567',
    address: 'Addis-Abeba, Éthiopie',
    logo: 'https://images.pexels.com/photos/2933521/pexels-photo-2933521.jpeg',
    tags: ['Agriculture', 'Sécurité Alimentaire', 'Durabilité', 'Rural'],
    coordinates: [9.1450, 40.4897],
    recentProjects: [
      {
        name: 'Agriculture Intelligente',
        description: 'Formation aux techniques agricoles modernes',
        status: 'active',
        budget: '95,000€'
      },
      {
        name: 'Banques de Semences',
        description: 'Création de réserves de semences locales',
        status: 'active',
        budget: '60,000€'
      }
    ]
  },
  {
    id: '9',
    name: 'Réseau des Femmes Leaders',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Genre & Droits humains',
    description: 'Réseau continental pour l\'autonomisation des femmes et la promotion du leadership féminin en Afrique.',
    image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    members: 450,
    projects: 28,
    founded: '2015',
    website: 'www.femmesleaders.ci',
    email: 'contact@femmesleaders.ci',
    phone: '+225 20 30 40 50',
    address: 'Abidjan, Côte d\'Ivoire',
    logo: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    tags: ['Femmes', 'Leadership', 'Politique', 'Formation'],
    coordinates: [5.3600, -4.0083],
    recentProjects: [
      {
        name: 'Académie du Leadership Féminin',
        description: 'Formation de 200 femmes aux postes de direction',
        status: 'active',
        budget: '180,000€'
      }
    ]
  },
  {
    id: '10',
    name: 'Tech4Africa',
    country: 'Rwanda',
    countryFlag: '🇷🇼',
    sector: 'Jeunesse & Innovation',
    description: 'Incubateur technologique pour l\'innovation sociale et l\'entrepreneuriat numérique en Afrique.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    members: 320,
    projects: 45,
    founded: '2018',
    website: 'www.tech4africa.rw',
    email: 'hello@tech4africa.rw',
    phone: '+250 788 123 456',
    address: 'Kigali, Rwanda',
    logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    tags: ['Tech', 'Innovation', 'Startup', 'Digital'],
    coordinates: [-1.9441, 30.0619],
    recentProjects: [
      {
        name: 'Hackathon Panafricain',
        description: 'Compétition d\'innovation technologique',
        status: 'active',
        budget: '250,000€'
      }
    ]
  }
];

export const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Bourse Leadership Jeunes Africains',
    type: 'financing',
    organization: 'CIDP',
    description: 'Programme de bourses pour former la nouvelle génération de leaders africains. Formation intensive de 6 mois avec accompagnement personnalisé.',
    amount: '50,000€',
    deadline: '2024-03-15',
    location: 'Douala, Cameroun',
    image: 'https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg',
    tags: ['Leadership', 'Jeunesse', 'Formation']
  },
  {
    id: '2',
    title: 'Formation Gouvernance Digitale',
    type: 'training',
    organization: 'Union Européenne',
    description: 'Formation gratuite sur les outils numériques pour améliorer la gouvernance des OSC. Certification internationale incluse.',
    deadline: '2024-02-28',
    location: 'En ligne',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    tags: ['Numérique', 'Gouvernance', 'Certification']
  },
  {
    id: '3',
    title: 'Appel à Projets Climat',
    type: 'financing',
    organization: 'Fondation Mo Ibrahim',
    description: 'Financement de projets innovants pour lutter contre le changement climatique en Afrique. Soutien technique inclus.',
    amount: '200,000€',
    deadline: '2024-04-30',
    location: 'Afrique',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    tags: ['Environnement', 'Innovation', 'Climat']
  },
  {
    id: '4',
    title: 'Sommet OSC Afrique de l\'Ouest',
    type: 'event',
    organization: 'Réseau OSC Afrique',
    description: 'Rassemblement annuel des OSC d\'Afrique de l\'Ouest pour partager les bonnes pratiques et créer des partenariats.',
    deadline: '2024-05-15',
    location: 'Dakar, Sénégal',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    tags: ['Réseau', 'Partenariat', 'Afrique de l\'Ouest']
  },
  {
    id: '5',
    title: 'Partenariat Santé Rurale',
    type: 'partnership',
    organization: 'Médecins sans Frontières',
    description: 'Recherche partenaires locaux pour étendre les programmes de santé dans les zones rurales africaines.',
    deadline: '2024-03-30',
    location: 'Afrique Sub-saharienne',
    image: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
    tags: ['Santé', 'Rural', 'Partenariat']
  },
  {
    id: '6',
    title: 'Concours Innovation Sociale',
    type: 'financing',
    organization: 'Banque Mondiale',
    description: 'Concours pour récompenser les innovations sociales les plus impactantes. Prix de 100,000€ pour le gagnant.',
    amount: '100,000€',
    deadline: '2024-06-01',
    location: 'Continental',
    image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    tags: ['Innovation', 'Social', 'Concours']
  },
  {
    id: '7',
    title: 'Fonds Climat Afrique 2024',
    type: 'financing',
    organization: 'Banque Africaine de Développement',
    description: 'Financement de projets d\'adaptation et d\'atténuation du changement climatique. Priorité aux initiatives communautaires.',
    amount: '500,000€',
    deadline: '2024-07-15',
    location: 'Afrique',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    tags: ['Climat', 'Environnement', 'Développement', 'Communauté']
  },
  {
    id: '8',
    title: 'Formation Leadership Digital',
    type: 'training',
    organization: 'Google for Nonprofits',
    description: 'Programme de formation intensive aux outils numériques pour les dirigeants d\'OSC. Certification Google incluse.',
    deadline: '2024-04-20',
    location: 'En ligne',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    tags: ['Digital', 'Leadership', 'Formation', 'Certification']
  },
  {
    id: '9',
    title: 'Sommet Innovation Sociale',
    type: 'event',
    organization: 'Ashoka Afrique',
    description: 'Rassemblement des entrepreneurs sociaux les plus innovants d\'Afrique. Networking et pitch sessions.',
    deadline: '2024-06-01',
    location: 'Cape Town, Afrique du Sud',
    image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    tags: ['Innovation', 'Entrepreneuriat', 'Networking', 'Pitch']
  },
  {
    id: '10',
    title: 'Partenariat Santé Mobile',
    type: 'partnership',
    organization: 'UNICEF',
    description: 'Recherche partenaires pour déployer des solutions de santé mobile dans les zones rurales.',
    deadline: '2024-05-30',
    location: 'Afrique de l\'Ouest',
    image: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
    tags: ['Santé', 'Mobile', 'Rural', 'UNICEF']
  }
];

export const posts: Post[] = [
  {
    id: '1',
    oscId: '1',
    author: 'CIDP Cameroun',
    authorAvatar: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    content: '🎉 Fiers d\'annoncer le lancement de notre nouveau programme de formation en leadership pour 100 jeunes africains ! Les candidatures sont ouvertes jusqu\'au 15 mars. #Leadership #Jeunesse',
    image: 'https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg',
    likes: 45,
    comments: 12,
    shares: 8,
    timestamp: '2024-01-15T10:30:00Z',
    type: 'project'
  },
  {
    id: '2',
    oscId: '2',
    author: 'Green Belt Movement',
    authorAvatar: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    content: '🌳 Cette semaine, nous avons planté 500 nouveaux arbres avec les femmes de la communauté de Naivasha. Ensemble, nous restaurons notre environnement !',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    likes: 78,
    comments: 23,
    shares: 15,
    timestamp: '2024-01-14T14:20:00Z',
    type: 'success'
  },
  {
    id: '3',
    oscId: '4',
    author: 'EduAfrica',
    authorAvatar: 'https://images.pexels.com/photos/5088026/pexels-photo-5088026.jpeg',
    content: '💡 Recherchons partenaires techniques pour notre projet "Écoles Connectées". Objectif : équiper 50 écoles rurales d\'ici 2024. Qui veut nous rejoindre ?',
    likes: 32,
    comments: 9,
    shares: 6,
    timestamp: '2024-01-13T16:45:00Z',
    type: 'opportunity'
  },
  {
    id: '4',
    oscId: '5',
    author: 'Women Empowerment Hub',
    authorAvatar: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    content: '👩‍💼 200 femmes entrepreneures ont été formées ce mois-ci ! 85% ont lancé leur activité dans les 3 mois suivant la formation. L\'autonomisation économique des femmes, c\'est notre priorité !',
    image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    likes: 67,
    comments: 18,
    shares: 22,
    timestamp: '2024-01-12T09:15:00Z',
    type: 'success'
  },
  {
    id: '5',
    oscId: '3',
    author: 'Médecins d\'Afrique',
    authorAvatar: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
    content: '🏥 Nouvelle clinique mobile en service dans la région de Kayes ! Nous pouvons maintenant atteindre 5000 patients supplémentaires chaque mois. Merci à nos donateurs !',
    likes: 89,
    comments: 25,
    shares: 19,
    timestamp: '2024-01-11T11:30:00Z',
    type: 'news'
  },
  {
    id: '6',
    oscId: '6',
    author: 'Africa Youth Network',
    authorAvatar: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    content: '🚀 Notre hackathon Tech4Africa a été un succès retentissant ! 500 jeunes développeurs ont participé et 50 projets innovants ont été présentés. L\'innovation africaine est en marche ! #Tech4Africa #Innovation',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    likes: 156,
    comments: 42,
    shares: 28,
    timestamp: '2024-01-10T15:20:00Z',
    type: 'success'
  },
  {
    id: '7',
    oscId: '9',
    author: 'Réseau des Femmes Leaders',
    authorAvatar: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
    content: '💪 200 nouvelles femmes leaders formées cette semaine ! Notre Académie du Leadership Féminin continue de transformer l\'Afrique. L\'avenir est féminin ! #LeadershipFéminin #Empowerment',
    likes: 203,
    comments: 67,
    shares: 45,
    timestamp: '2024-01-09T09:45:00Z',
    type: 'success'
  },
  {
    id: '8',
    oscId: '10',
    author: 'Tech4Africa',
    authorAvatar: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    content: '🔔 NOUVELLE OPPORTUNITÉ : Nous recherchons des partenaires techniques pour notre programme d\'incubation. Aidez-nous à former la prochaine génération d\'entrepreneurs tech africains !',
    likes: 89,
    comments: 23,
    shares: 15,
    timestamp: '2024-01-08T14:15:00Z',
    type: 'opportunity'
  }
];

export const sectors = [
  'Tous les secteurs',
  'Paix & Gouvernance',
  'Environnement',
  'Santé',
  'Éducation',
  'Genre & Droits humains',
  'Jeunesse & Innovation',
  'Culture & Patrimoine',
  'Agriculture & Sécurité Alimentaire',
  'Développement économique'
];

export const countries = [
  'Tous les pays',
  'Cameroun',
  'Kenya', 
  'Mali',
  'Sénégal',
  'Ghana',
  'Nigeria',
  'Afrique du Sud',
  'Éthiopie',
  'Côte d\'Ivoire',
  'Burkina Faso',
  'Rwanda',
  'Tanzanie',
  'Ouganda',
  'Maroc',
  'Tunisie',
  'Algérie',
  'Égypte',
  'Zambie',
  'Zimbabwe',
  'Botswana',
  'Namibie',
  'Maurice',
  'Seychelles',
  'Madagascar'
];

export const statistics = {
  oscs: 2847,
  countries: 54,
  opportunities: 342,
  collaborations: 12456,
  funding: '127M€',
  activeProjects: 8934,
  members: 156789,
  successStories: 234
};