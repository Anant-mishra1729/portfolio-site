// TODO Add a couple lines about each project
const data = [
  {
    title: 'Finger Spell',
    subtitle: 'Project made for people with disability in speaking',
    link: 'https://github.com/Anant-mishra1729/Finger-spell',
    image: '/images/projects/finger_spell.jpg',
    date: '2015-09-20',
    desc:
      'Project made for people with disability in speaking, the detected Indian Sign language gestures'
      + ' are classified using trained model and converted into words and alphabets accordingly.',
  },
  {
    title: 'Road-sign-detection',
    subtitle: 'Project for detection of road signs using YOLOv5 algorithm',
    link: 'https://github.com/Anant-mishra1729/Road-sign-detection',
    image: '/images/projects/roadsign.jpg',
    date: '2015-09-20',
    desc:
      'Project for detection of road signs using Ultralytics YOLO version 5 algorithm.  '
      + 'Resulting model is tested over both images and video datasets with accuracy over 95%',
  },
  {
    title: 'Image color transfer',
    subtitle: 'Transferring color texture from one image to another.',
    link: 'https://github.com/Anant-mishra1729/Image-color-transfer',
    image: '/images/projects/Image_color_transfer.jpg',
    date: '2015-06-28',
    desc:
      'Implementation of algorithm for tranferring colors between two images. '
      + 'Paper of algorithm was published in Color transfer between images by Erik Reinhard, Michael Ashikhmin, Bruce Gooch and Peter Shirley ',
  },
  {
    title: 'Hash-hunt',
    subtitle: 'Hashing based reverse image search engine',
    image: '/images/projects/hash_hunt.jpg',
    date: 'June 2020',
    desc:
      'Hashing based reverse image search engine, '
      + 'Images are stored in database with their computed hash values. '
      + 'Fast image searching done in O(log n) time complexity ',
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
