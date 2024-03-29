'use strict';

module.exports = {
  url: 'https://mymathmosaic.github.io/',
  pathPrefix: '/mymathmosaic',
  title: 'Arthur K.',
  subtitle: 'Personal website and blog',
  copyright: `Powered by <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.gatsbyjs.org/">
                  Gatsby
                </a>.`,
  postsPerPage: 4,
  googleAnalyticsId: 'UA-147707170-1',
  useKatex: false,
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'About',
      path: '/about-me'
    },
    {
      label: 'Contact me',
      path: '/contact-me'
    }
  ],
  author: {
    name: 'Arthur K.',
    bio: [
      'Digital nomad',
      'Full Stack Developer',
      `Currently Studying
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/mymathmosaic/ideal-eureka">
          Rust
        </a>`,
      'Right! changes when you click on it',
      'Funny huh?',
      'Not enough?',
      'This is the last one.',
      'Seriously this one is.',
      'Haha, you still not bored?',
      'And again...',
    ],
    contacts: {
      email: 'my.math.mosaic@gmail.com',
      facebook: 'arthur.khlghatyan.1',
      //telegram: 'arthurkhlghatyan',
      //twitter: '___arthurk',
      github: 'mymathmosaic',
      linkedin: 'arthurkhlghatyan',
      //angelist: 'arthurkhlghatyan'
    }
  }
};
