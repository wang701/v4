module.exports = {
  siteTitle: 'Yang Wang | Senior Data Scientist',
  siteDescription: 'Yang Wang is a Senior Data Scientist at the Climate Corporation.',
  siteKeywords:
    'Yang Wang, yang, wang, navigation engineer, data science, embedded systems, purdue, climate corp',
  siteUrl: 'https://waterkingwatergoat.com',
  siteLanguage: 'en_US',
  name: 'Yang Wang',
  location: 'St. Louis, MO',
  email: 'purduewang@gmail.com',
  github: 'https://github.com/wang701',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/wang701',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/wang701',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/wywayaw/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Credit',
      url: '/#credit',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  googleAnalyticsID: 'UA-000000000-0', // Placeholder - replace with actual tracking ID

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
