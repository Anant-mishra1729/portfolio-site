// TODO Add a couple lines about each project
const data = [
  {
    title: 'Hash-hunt',
    subtitle: 'Hashing based reverse image search engine',
    image: '/images/projects/nearestdollar.jpg',
    date: 'June 2020',
    desc:
      'Hashing based reverse image search engine, '
      + 'Images are stored in database with their computed hash values. '
      + 'Robust image searching done in O(log n) time complexity ',
  },
  {
    title: 'Road-sign-detection',
    subtitle: 'Project for detection of road signs using YOLOv5 algorithm',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/harvest.jpg',
    date: '2015-09-20',
    desc:
      'Won ~ $7000 in prizes for an advanced, low cost monitoring solution '
      + 'for crops. Harvest was designed to catch irrigation leaks, overwatering, '
      + 'and nutrient deficiencies at an affordable price for the developing world.',
  },
  {
    title: 'Space Potato',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2015-06-28',
    desc:
      'Launched a potato battery powered weather balloon with two cameras '
      + 'and gps transponder. Resulting photos were published in a coffee table book. '
      + 'You can email me for a copy.',
  },
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    date: '2015-05-15',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
];

export default data;
