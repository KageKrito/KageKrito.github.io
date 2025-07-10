const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://KageKrito.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Oliver Heckel',
  role: 'Student of Computer Science ( B.Sc. )',
  description:
    'I am a student at the Eberhard Karls Universität Tübingen, Germany, pursuing a Bachelor of Science in Computer Science. I have a keen interest in machine learning, artificial intelligence, software development and programming languages, with a particular focus on Java and Python. I enjoy working on projects that challenge my skills and allow me to learn new technologies.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/KageKrito',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'mission_db',
    description:
      'This is a team project developed during the course "Teamprojekt" ( Winter Semester 2024/25 ) for the [@brendel-group](https://github.com/brendel-group). \n mission_db is a web-based application to work with and organize Polybots missions. \n I was primarily responsible for implementing the frontend API integration using TypeScript (fetch API), and also contributed to the user interface and other aspects of the application. \n This project was a collaborative effort with a team of 6 students from the Eberhard Karls Universität Tübingen, Germany. \n Team members: [@Felix Mycka](https://github.com/sh1negg), [@Pascal Kuppler](https://github.com/pascal260303), [@Samuel Hempelmann](https://github.com/SamuABC), [@Simon Rappenecker](https://github.com/DerSimi), [@Simon Rappold](https://github.com/s-rappold).',
    stack: ['Python', 'TypeScript', 'Django', 'Rest API', 'PostgreSQL'],
    sourceCode: 'https://github.com/brendel-roup/mission_db',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'C++',
  'Scala',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Git',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'oliver.heckel2002@gmail.com',
}

export { header, about, projects, skills, contact }
