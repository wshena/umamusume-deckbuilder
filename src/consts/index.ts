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
        link: '/cards/support-cards'
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
        link: '/cards/support-cards'
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