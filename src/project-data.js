export const projectData = [
  {title: "LiveNation",
  subTitle: 'Bean.LA',
  description: 'Developer on the Bean team which built a new website for LiveNation. Work included styling for all pages, building responsive custom SCSS for multiple breakpoints, utilizing Embla carousel for multiple custom carousels, creating a user friendly content-model and building a tech pack download flow using SendGrid with serverless functions.',
  techStack: 'Nuxt3/Vue/TypeScript, Sanity CMS, Node, SCSS',
   photos: [{
    src:'/images/ln-6.webp',
    caption: 'Home page'
  },
  {src:'/images/ln-10.webp', caption: 'Lightbox with shareable url'},
  {src:'/images/ln-5.webp', caption: 'Venue page'},
  {src:'/images/ln-4.webp', caption: 'Venue page with social media carousel'},
  {src:'/images/ln-3.webp', caption: 'Gallery grid'},
  {src:'/images/ln-7.webp', caption: 'Mobile lightbox'},
  {src:'/images/ln-8.webp', caption: 'Mobile tech pack download'},

]
  },
  {title:"Salon94",
  subTitle: 'Bean.LA',
  description: 'Developed new features for Salon94\'s site refresh and new home page. Work included syncing Shopify data into SanityCMS for more flexibility, building out corresponding Shop features such as a homepage shop carousel, and rebuilding shop and checkout flow utilizing Shopify Storefront API and Pinia state management.',
  techStack: 'Nuxt3/Vue, Sanity CMS, SCSS, Shopify Storefront',
  photos:[
    {src:'/images/s94-1.webp', caption: 'Home page shop carousel, made possible with Shopify/Sanity integration.'},
    {src:'/images/s94-6.webp', caption: 'New home page'},
    {src:'/images/s94-3.webp', caption: 'Shop PDP'},
    {src:'/images/s94-2.webp', caption: 'Shop page'},
    {src:'/images/s94-5.webp', caption: 'Home page on view grid'},
    {src:'/images/s94-4.webp', caption: 'Cart'},
  ]
},
  {title:'Dublab',
  subTitle: 'Bean.LA',
  description: 'Developer for Dublab, a continuing Bean client. Migrated Dublab\'s calendar system from WordPress to Google Calendar API, which included creating serverless functions to utilize new data and building a new frontend with modern UI features.',
  techStack: 'Vue2, WordPress, SCSS',
  photos:[
    {src:'/images/dublab-1.webp', caption: 'Schedule page'},
    {src:'/images/dublab-3.webp', caption: 'Mobile schedule page'},
    {src:'/images/dublab-2.webp', caption: 'Active date functionality'},
    {src:'/images/dublab-4.webp', caption: 'Home page with marquee'},
  ]
},
  {title:"Community Food Experience",
subTitle:'ACFB',
description: 'Took over as developer and maintainer of the Community Food Experience, an interactive simulation that shows the difficulty of living in food insecurity. Worked with Atlanta Community Food Bank staff to help make UI decisions and implement them, such as adding new nutrition information and fixing small bugs that appeared through the endgame process.',
techStack: 'React, CSS',
photos:[
  {src:'/images/cfe-5.webp', caption: 'CFE intro page'},
  {src:'/images/cfe-1.webp', caption: 'CFE game board'},
  {src:'/images/cfe-2.webp', caption: 'Store'},
  {src:'/images/cfe-3.webp', caption: 'Nutrition Status Card'},
  {src:'/images/cfe-4.webp', caption: 'Food item card'},
]
},
]