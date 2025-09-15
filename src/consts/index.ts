export const Rarity = [
  {
    id: 'SSR',
    label: 'SSR Support Cards',
    url: 'support-cards/rarity/ssr'
  },
  {
    id: 'SR',
    label: 'SR Support Cards',
    url: 'support-cards/rarity/sr'
  },
  {
    id: 'R',
    label: 'R Support Cards',
    url: 'support-cards/rarity/r'
  }
]

export const Support_Card_Type = [
  'Stamina', 'Group', 'Guts', 'Pal', 'Power', 'Speed', 'Wit'
]

export const HEADER_NAV:NavLinkProps[] = [
  {
    id: 1,
    label: 'home',
    link: '/'
  },
  {
    id: 2,
    label: 'explore',
    link: '#',
    sublink: [
      {
        id: 1,
        label: 'characters',
        link: '/characters'
      },
      {
        id: 2,
        label: 'support cards',
        link: '/support-cards'
      },
    ]
  },
  {
    id: 3,
    label: 'help',
    link: '/help'
  },
]

export const FooterNavigation:FooterNavigationProps[] = [
  {
    label: 'Navigation',
    links: [
      {
        label:'Home',
        link: '/'
      },
      {
        label:'All Characters',
        link: '/characters'
      },
      {
        label:'All Support Cards',
        link: '/support-cards'
      },
      {
        label:'Decks',
        link: '/decks'
      },
      {
        label:'Helps',
        link: '/helps'
      },
    ]
  },  
  {
    label: 'Social Media',
    links: [
      {
        label: 'Github',
        link: 'https://github.com/wshena'
      },
      {
        label: 'Instagram',
        link: 'https://www.instagram.com/poppywydy/'
      },
      {
        label: 'LinkedIn',
        link: 'www.linkedin.com/in/wisnu-shena-arrafi-866226251'
      },
    ]
  }
]

export const FooterParagraph = [
  {
    id: 1,
    content: 'Umamusume Deckbuilder adalah platform khusus untuk para penggemar game Umamusume Pretty Derby yang ingin membangun dan mengoptimalkan deck karakter mereka. Website ini menyediakan alat canggih untuk merencanakan strategi, menganalisis statistik, dan menciptakan kombinasi deck yang paling efektif. Dengan antarmuka yang intuitif dan database yang komprehensif, pemain dapat dengan mudah mengeksplorasi berbagai kemungkinan tim untuk mencapai performa terbaik di balapan.'
  },
  {
    id: 2,
    content: "Website ini menawarkan koleksi lengkap semua karakter Umamusume dari berbagai generasi, dilengkapi dengan informasi detail tentang statistik, skill, dan kompatibilitas masing-masing karakter. Fitur drag-and-drop yang responsif memungkinkan pengguna menyusun deck dengan mudah sementara sistem perhitungan real-time memberikan insight mendalam tentang sinergi antar karakter. Pemain dapat membandingkan berbagai kombinasi, melihat bonus statistik, dan menerima rekomendasi deck berdasarkan meta terbaru untuk tetap kompetitif dalam berbagai event dan turnamen."
  },
  {
    id: 3,
    content: "Selain sebagai deck builder, platform ini juga berfungsi sebagai komunitas dimana para trainer dapat berbagi deck mereka, memberikan rating pada kombinasi populer, dan berdiskusi tentang strategi terbaru. Fitur impor/ekspor deck memudahkan berbagi konfigurasi dengan pemain lain, sementara sistem bookmark memungkinkan pengguna menyimpan deck favorit mereka untuk referensi cepat. Dengan update berkala yang mengikuti patch game terbaru, website ini menjamin informasi yang akurat dan relevan untuk pengalaman gaming yang optimal."
  },
  {
    id: 4,
    content: "Umamusume Deckbuilder lebih dari sekadar alat—ini adalah pusat resource bagi para penggemar yang ingin mendalami mekanisme game dan mengasah kemampuan strategi mereka. Melalui fitur tier list terkurasi, panduan karakter mendalam, dan analisis meta season terbaru, platform ini mendukung baik pemain baru maupun veteran dalam perjalanan mereka menjadi trainer top. Bergabunglah dengan komunitas kami dan temukan bagaimana deck yang terencana dengan baik dapat membawa para kuda poni cantikmu meraih kemenangan gemilang di trek balap!"
  },
]

export const CardSuperType = [
  {
    label: 'select card type',
    value: ''
  },
  {
    label: 'energy',
    value: 'supertype:energy'
  },
  {
    label: 'pokemon',
    value: 'supertype:pokemon'
  },
  {
    label: 'trainer',
    value: 'supertype:trainer'
  },
]

export const CardType = [
  { label: 'select type', value: '' },
  { label: 'Colorless', value: 'types:colorless' },
  { label: 'Darkness', value: 'types:darkness' }, 
  { label: 'Dragon', value: 'types:dragon' }, 
  { label: 'Fairy', value: 'types:fairy' }, 
  { label: 'Fighting', value: 'types:fighting' }, 
  { label: 'Fire', value: 'types:fire' }, 
  { label: 'Grass', value: 'types:grass' }, 
  { label: 'Lightning', value: 'types:lightning' }, 
  { label: 'Metal', value: 'types:metal' }, 
  { label: 'Psychic', value: 'types:psychic' }, 
  { label: 'Water', value: 'types:water'}
]

export const CardSort = [
  { label: 'sort', value: '' },
  { label: 'name', value: 'orderBy=name' },
  { label: 'number', value: 'orderBy=number' },
  { label: 'hp', value: 'orderBy=hp' },
  { label: 'rarity', value: 'orderBy=rarity' },
]

export const CardFormat = [
  { label: 'select format', value: '' },
  { label: 'standard', value: 'legalities.standard:legal' },
  { label: 'expanded', value: 'legalities.expanded:legal' },
  { label: 'unlimited', value: 'legalities.unlimited:legal' },
]

export const CardSubtypes = [ 
  { label: 'select sub-type', value: '' },
  { label: 'ACE SPEC', value: 'subtypes:ace' },
  { label: 'Ancient', value: 'subtypes:ancient' }, 
  { label: 'BREAK', value: 'subtypes:break' }, 
  { label: 'Baby', value: 'subtypes:baby' }, 
  { label: 'Basic', value: 'subtypes:basic' }, 
  { label: 'EX', value: 'subtypes:ex' }, 
  { label: 'Eternamax', value: 'subtypes:eternamax' }, 
  { label: 'Fusion Strike', value: 'subtypes:fusion' }, 
  { label: 'Future', value: 'subtypes:future' }, 
  { label: 'GX', value: 'subtypes:gx' }, 
  { label: 'Goldenrod Game Corner', value: 'subtypes:game' }, 
  { label: 'Item', value: 'subtypes:item' }, 
  { label: 'LEGEND', value: 'subtypes:legend' }, 
  { label: 'Level-Up', value: 'subtypes:level' }, 
  { label: 'MEGA', value: 'subtypes:mega' }, 
  { label: 'Pokémon Tool', value: 'subtypes:tool' }, 
  { label: 'Pokémon Tool F', value: 'subtypes:f' }, 
  { label: 'Prime', value: 'subtypes:prime' }, 
  { label: 'Prism Star', value: 'subtypes:prism' }, 
  { label: 'Radiant', value: 'subtypes:radiant' }, 
  { label: 'Rapid Strike', value: 'subtypes:rapid' }, 
  { label: 'Restored', value: 'subtypes:restored' }, 
  { label: "Rocket\'s Secret Machine", value: 'subtypes:rockets' }, 
  { label: 'SP', value: 'subtypes:sp' }, 
  { label: 'Single Strike', value: 'subtypes:single' }, 
  { label: 'Special', value: 'subtypes:special' }, 
  { label: 'Stadium', value: 'subtypes:stadium' }, 
  { label: 'Stage 1', value: 'subtypes:"Stage 1"' }, 
  { label: 'Stage 2', value: 'subtypes:"Stage 2"' }, 
  { label: 'Star', value: 'subtypes:star' }, 
  { label: 'Supporter', value: 'subtypes:supporter' }, 
  { label: 'TAG TEAM', value: 'subtypes:tag' }, 
  { label: 'Team Plasma', value: 'subtypes:plasma' }, 
  { label: 'Technical Machine', value: 'subtypes:technical' }, 
  { label: 'Tera', value: 'subtypes:tera' }, 
  { label: 'Ultra Beast', value: 'subtypes:ultra' }, 
  { label: 'V', value: 'subtypes:V' }, 
  { label: 'V-UNION', value: 'subtypes:union' }, 
  { label: 'VMAX', value: 'subtypes:vmax' }, 
  { label: 'VSTAR', value: 'subtypes:vstar' }, 
  { label: 'ex', value: 'subtypes:ex'}
]

const Sets = [
  "151",
  "Ancient Origins",
  "Aquapolis",
  "Arceus",
  "Astral Radiance",
  "Astral Radiance Trainer Gallery",
  "Base",
  "Base Set 2",
  "Battle Styles",
  "Best of Game",
  "Black & White",
  "Boundaries Crossed",
  "BREAKpoint",
  "BREAKthrough",
  "Brilliant Stars",
  "Brilliant Stars Trainer Gallery",
  "Burning Shadows",
  "BW Black Star Promos",
  "Call of Legends",
  "Celebrations",
  "Celebrations: Classic Collection",
  "Celestial Storm",
  "Champion's Path",
  "Chilling Reign",
  "Cosmic Eclipse",
  "Crimson Invasion",
  "Crown Zenith",
  "Crown Zenith Galarian Gallery",
  "Crystal Guardians",
  "Dark Explorers",
  "Darkness Ablaze",
  "Delta Species",
  "Deoxys",
  "Detective Pikachu",
  "Diamond & Pearl",
  "Double Crisis",
  "DP Black Star Promos",
  "Dragon",
  "Dragon Frontiers",
  "Dragon Majesty",
  "Dragon Vault",
  "Dragons Exalted",
  "Emerald",
  "Emerging Powers",
  "Evolutions",
  "Evolving Skies",
  "EX Trainer Kit 2 Minun",
  "EX Trainer Kit 2 Plusle",
  "EX Trainer Kit Latias",
  "EX Trainer Kit Latios",
  "Expedition Base Set",
  "Fates Collide",
  "FireRed & LeafGreen",
  "Flashfire",
  "Forbidden Light",
  "Fossil",
  "Furious Fists",
  "Fusion Strike",
  "Generations",
  "Genetic Apex",
  "Great Encounters",
  "Guardians Rising",
  "Gym Challenge",
  "Gym Heroes",
  "HeartGold & SoulSilver",
  "HGSS Black Star Promos",
  "Hidden Fates",
  "Hidden Legends",
  "Holon Phantoms",
  "HS—Triumphant",
  "HS—Undaunted",
  "HS—Unleashed",
  "Jungle",
  "Kalos Starter Set",
  "Legend Maker",
  "Legendary Collection",
  "Legendary Treasures",
  "Legends Awakened",
  "Lost Origin",
  "Lost Origin Trainer Gallery",
  "Lost Thunder",
  "Majestic Dawn",
  "McDonald's Collection 2011",
  "McDonald's Collection 2012",
  "McDonald's Collection 2014",
  "McDonald's Collection 2015",
  "McDonald's Collection 2016",
  "McDonald's Collection 2017",
  "McDonald's Collection 2018",
  "McDonald's Collection 2019",
  "McDonald's Collection 2021",
  "McDonald's Collection 2022",
  "Mysterious Treasures",
  "Mythical Island",
  "Neo Destiny",
  "Neo Discovery",
  "Neo Genesis",
  "Neo Revelation",
  "Next Destinies",
  "Nintendo Black Star Promos",
  "Noble Victories",
  "Obsidian Flames",
  "Paldea Evolved",
  "Paldean Fates",
  "Paradox Rift",
  "Phantom Forces",
  "Plasma Blast",
  "Plasma Freeze",
  "Plasma Storm",
  "Platinum",
  "Pokémon Futsal Collection",
  "Pokémon GO",
  "Pokémon Rumble",
  "POP Series 1",
  "POP Series 2",
  "POP Series 3",
  "POP Series 4",
  "POP Series 5",
  "POP Series 6",
  "POP Series 7",
  "POP Series 8",
  "POP Series 9",
  "Power Keepers",
  "Primal Clash",
  "Prismatic Evolutions",
  "Promo-A",
  "Rebel Clash",
  "Rising Rivals",
  "Roaring Skies",
  "Ruby & Sapphire",
  "Sandstorm",
  "Scarlet & Violet",
  "Scarlet & Violet Black Star Promos",
  "Scarlet & Violet Energies",
  "Scarlet & Violet Promos",
  "Secret Wonders",
  "Shining Fates",
  "Shining Legends",
  "Shiny Vault",
  "Shrouded Fable",
  "Silver Tempest",
  "Silver Tempest Trainer Gallery",
  "Skyridge",
  "SM Black Star Promos",
  "Southern Islands",
  "Steam Siege",
  "Stellar Crown",
  "Stormfront",
  "Sun & Moon",
  "Supreme Victors",
  "Surging Sparks",
  "Sword & Shield",
  "SWSH Black Star Promos",
  "Team Magma vs Team Aqua",
  "Team Rocket",
  "Team Rocket Returns",
  "Team Up",
  "Temporal Forces",
  "Twilight Masquerade",
  "Ultra Prism",
  "Unbroken Bonds",
  "Unified Minds",
  "Unseen Forces",
  "Vivid Voltage",
  "Wizards Black Star Promos",
  "XY",
  "XY Black Star Promos"
]

export const PackSets = [
  { label: 'Select Pack', value: ' ' },
  ...Sets.map((item) => ({
    label: item,
    value: `set.name:"${item}"`
  }))
];