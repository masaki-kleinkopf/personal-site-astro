export const projectData = [
  {title:"Salon94",
  subTitle: 'Bean.LA',
  description: 'Salon94 came to Bean with a desire for a new frontpage as well as a refresh. One of the tasks was having shop product cards that could be used across the site. I was tasked with rebuilding how Shopify Storefront data was utilized, which previously came directly from the Storefront API. In the new iteration, I utilized an existing SanityCMS/Shopify sync to integrate shop data into our CMS, which made the data much more flexible. This led to being able to reference individuals products and collections across the site, and allowed the building of features such as a featured product carousel on the homepage, driving sales for the client. I also rebuilt the headless Shopify store and checkout with Pinia and Nuxt, integrating the new data from Sanity CMS while building out the components according to new designs.',
  techStack: 'Nuxt3/Vue, Sanity CMS, SCSS, Shopify Storefront',
  photos:[
    {src:'/images/s94-1.webp', caption: ''},
    {src:'/images/s94-2.webp', caption: ''},
    {src:'/images/s94-3.webp', caption: ''},
    {src:'/images/s94-4.webp', caption: ''},
    {src:'/images/s94-4.webp', caption: ''},
  ]
},
  {title: "LiveNation",
  subTitle: 'Bean.LA',
  description: 'I was part of the Bean development team that built a new website for LiveNation, which showcases all of their venues for industry professionals. My initial work consisted of styling for all pages on the site, including building responsive layouts for mobile, small tablet, tablet and desktop screen sizes. We utilized Embla for a flexible, customizable carousel, which I implemented on multiple places on the site, including a social media carousel and a lightbox for venue images which we built with shareable urls for each image. I built a tech pack download flow, where I integrated SendGrid utilizing serverless functions, and built corresponding frontend components.',
  techStack: 'Nuxt3/Vue/TypeScript, Sanity CMS, Node, SCSS',
   photos: [{
    src:'/images/ln-6.webp',
    caption: 'Built new website for Live Nation Venues, utilizing Nuxt 3, TypeScript, Sanity CMS and SCSS'
  },
  {src:'/images/ln-5.webp', caption: 'Another one'},
  {src:'/images/ln-6.webp', caption: 'Another one'},
  {src:'/images/ln-4.webp', caption: 'Another one'},
  {src:'/images/ln-3.webp', caption: 'Another one'},
  {src:'/images/ln-10.webp', caption: 'Another one'},
  {src:'/images/ln-7.webp', caption: 'Another one'},
  {src:'/images/ln-8.webp', caption: 'Another one'},
  {src:'/images/ln-9.webp', caption: 'Another one'},

]
  },
  {title:'Dublab',
  subTitle: 'Bean.LA',
  description: 'I was one of three developers work on Dublab calendar migration (an independent radio station). We decided to migrate the calendar section from WordPress to Google Calendar, to make life much easier for the station when inputting a week\'s play schedule. I helped build a serverless function to retrieve Google Calendar information, then rebuilt the schedule page according to new designs. This work consisted of building now playing functionality as well as a snap to scroll with active date feature that we built utilizing the Intersection Observer API.',
  techStack: 'Vue2, WordPress, SCSS',
  photos:[
    {src:'/images/dublab1.webp', caption: ''},
    {src:'/images/dublab2.webp', caption: ''},
    {src:'/images/dublab3.webp', caption: ''},
    {src:'/images/dublab4.webp', caption: ''},
  ]
},
  {title:"Community Food Experience",
subTitle:'Atlanta Community Food Bank',
description: 'I took over as a maintainer of the Community Food Experience, an interactive simulation that shows the difficulty of living in food insecurity. The simulation does important work in workshops which drive fundraising for the food bank. I worked with ACFB staff to help make UI decisions and implement them, such as adding new nutrition information and fixing small bugs that appeared through the endgame process',
techStack: 'React, CSS',
photos:[
  {src:'/images/cfe-1.webp', caption: ''},
  {src:'/images/cfe-2.webp', caption: ''},
  {src:'/images/cfe-3.webp', caption: ''},
  {src:'/images/cfe-4.webp', caption: ''},
]
},
]