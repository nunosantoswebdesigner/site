module.exports = {
  siteTitle: 'Nuno Santos | Front-end Developer',
  siteDescription:
    'Nuno Santos is a front-end developer based in Portugal, specialized in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'nuno santos, portugal, front-end developer, web developer, javascript',
  siteUrl: 'https://nunosantos.netlify.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Nuno Santos',
  location: 'Caldas da Rainha, PT',
  email: 'nunosantoswebdesigner@gmail.com',
  github: 'https://github.com/nunosantoswebdesigner',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nunosantoswebdesigner',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nuno-santos-96b300125/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/nunosantoswebdesigner',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nunosantos_webdesigner',
    },
  ],

  navLinks: [
    {
      name: 'Sobre Mim',
      url: '/#about',
    },
    {
      name: 'Profissional',
      url: '/#jobs',
    },
    {
      name: 'Freelancer',
      url: '/#projects',
    },
    {
      name: 'Contacto',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

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
