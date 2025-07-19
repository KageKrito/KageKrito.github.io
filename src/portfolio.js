const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://oliverheckel.com',
  title: 'OH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Oliver Heckel',
  role: 'Student of Computer Science',
  description: (
    <>
      <h4>Education</h4>
      <p>
        I&apos;m a sixth-semester Computer Science student at the{' '}
      <a
        href="https://uni-tuebingen.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Eberhard Karls University of Tübingen
      </a>
      , Germany, pursuing a Bachelor of Science degree.
      </p>

      <h4>Interests</h4>
      <p>
        I am particularly interested in machine learning and artificial intelligence, especially their applications in solving real-world problems.<br />
        I enjoy exploring new models and techniques and understanding how intelligent systems can be designed and improved.
      </p>

      <h4>Motivation</h4>
      <p>
        What drives me in the field of computer science is the opportunity to build solutions for real-world problems.<br />
        I&apos;m motivated by the constant evolution of technology and the chance to contribute to innovative projects that can make a difference.
      </p>

      <h4>Future Plans</h4>
      <p>
        After completing my Bachelor&apos;s degree, I plan to pursue a Master of Science in Computer Science to further develop my expertise.
      </p>
    </>
  ),
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/KageKrito',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'mission_db',
    description: (
      <>
        <h5>Description</h5>
        <p>
        This is a team project developed during the course Teamprojekt (Winter Semester 2024/25) for the <a href="https://github.com/brendel-group" target="_blank" rel="noopener noreferrer">brendel-group</a>.<br />
        mission_db is a web-based application to work with and organize Polybots missions.
        </p>
        
        <h5>My Contribution</h5>
        <p>
        I was primarily responsible for implementing the frontend API integration using TypeScript (fetch API), and also contributed to the user interface and other aspects of the application.
        </p>

        <h5>Collaborators</h5>
        <p>
        This project was a collaborative effort with a team of 6 students from the <a href="https://uni-tuebingen.de/" target="_blank" rel="noopener noreferrer">Eberhard Karls Universität Tübingen</a>, Germany.<br />
        Collaborated with:{' '}<a href="https://github.com/sh1negg" target="_blank" rel="noopener noreferrer">Felix Mycka</a>,{' '}
        <a href="https://github.com/pascal260303" target="_blank" rel="noopener noreferrer">Pascal Kuppler</a>,{' '}
        <a href="https://github.com/SamuABC" target="_blank" rel="noopener noreferrer">Samuel Hempelmann</a>,{' '}
        <a href="https://github.com/DerSimi" target="_blank" rel="noopener noreferrer">Simon Rappenecker</a> and{' '}
        <a href="https://github.com/s-rappold" target="_blank" rel="noopener noreferrer">Simon Rappold</a>.
        </p>
      </>
    ),
    stack: ['Python', 'TypeScript', 'Django', 'PostgreSQL', 'React', 'CSS'],
    sourceCode: 'https://github.com/brendel-group/mission_db',
  },
  /* {
    name: 'test1',
    description: (
      <>
        This is a team project developed during the course Teamprojekt (Winter Semester 2024/25) for the <a href="https://github.com/brendel-group" target="_blank" rel="noopener noreferrer">brendel-group</a>.<br />
        mission_db is a web-based application to work with and organize Polybots missions.<br />
        <br />
        I was primarily responsible for implementing the frontend API integration using TypeScript (fetch API), and also contributed to the user interface and other aspects of the application.<br />
        <br />
        This project was a collaborative effort with a team of 6 students from the <a href="https://uni-tuebingen.de/" target="_blank" rel="noopener noreferrer">Eberhard Karls Universität Tübingen</a>, Germany.<br />
        Collaborated with:{' '}<a href="https://github.com/sh1negg" target="_blank" rel="noopener noreferrer">Felix Mycka</a>,{' '}
        <a href="https://github.com/pascal260303" target="_blank" rel="noopener noreferrer">Pascal Kuppler</a>,{' '}
        <a href="https://github.com/SamuABC" target="_blank" rel="noopener noreferrer">Samuel Hempelmann</a>,{' '}
        <a href="https://github.com/DerSimi" target="_blank" rel="noopener noreferrer">Simon Rappenecker</a> and{' '}
        <a href="https://github.com/s-rappold" target="_blank" rel="noopener noreferrer">Simon Rappold</a>.
      </>
    ),
    stack: ['Python', 'TypeScript', 'Django', 'PostgreSQL'],
    sourceCode: 'https://github.com/brendel-group/mission_db',
  },
  {
    name: 'test2',
    description: (
      <>
        This is a team project developed during the course Teamprojekt (Winter Semester 2024/25) for the <a href="https://github.com/brendel-group" target="_blank" rel="noopener noreferrer">brendel-group</a>.<br />
        mission_db is a web-based application to work with and organize Polybots missions.<br />
        <br />
        I was primarily responsible for implementing the frontend API integration using TypeScript (fetch API), and also contributed to the user interface and other aspects of the application.<br />
        <br />
        This project was a collaborative effort with a team of 6 students from the <a href="https://uni-tuebingen.de/" target="_blank" rel="noopener noreferrer">Eberhard Karls Universität Tübingen</a>, Germany.<br />
        Collaborated with:{' '}<a href="https://github.com/sh1negg" target="_blank" rel="noopener noreferrer">Felix Mycka</a>,{' '}
        <a href="https://github.com/pascal260303" target="_blank" rel="noopener noreferrer">Pascal Kuppler</a>,{' '}
        <a href="https://github.com/SamuABC" target="_blank" rel="noopener noreferrer">Samuel Hempelmann</a>,{' '}
        <a href="https://github.com/DerSimi" target="_blank" rel="noopener noreferrer">Simon Rappenecker</a> and{' '}
        <a href="https://github.com/s-rappold" target="_blank" rel="noopener noreferrer">Simon Rappold</a>.
      </>
    ),
    stack: ['Python', 'TypeScript', 'Django', 'PostgreSQL'],
    sourceCode: 'https://github.com/brendel-group/mission_db',
  },
  {
    name: 'test3',
    description: (
      <>
        This is a team project developed during the course Teamprojekt (Winter Semester 2024/25) for the <a href="https://github.com/brendel-group" target="_blank" rel="noopener noreferrer">brendel-group</a>.<br />
        mission_db is a web-based application to work with and organize Polybots missions.<br />
        <br />
        I was primarily responsible for implementing the frontend API integration using TypeScript (fetch API), and also contributed to the user interface and other aspects of the application.<br />
        <br />
        This project was a collaborative effort with a team of 6 students from the <a href="https://uni-tuebingen.de/" target="_blank" rel="noopener noreferrer">Eberhard Karls Universität Tübingen</a>, Germany.<br />
        Collaborated with:{' '}<a href="https://github.com/sh1negg" target="_blank" rel="noopener noreferrer">Felix Mycka</a>,{' '}
        <a href="https://github.com/pascal260303" target="_blank" rel="noopener noreferrer">Pascal Kuppler</a>,{' '}
        <a href="https://github.com/SamuABC" target="_blank" rel="noopener noreferrer">Samuel Hempelmann</a>,{' '}
        <a href="https://github.com/DerSimi" target="_blank" rel="noopener noreferrer">Simon Rappenecker</a> and{' '}
        <a href="https://github.com/s-rappold" target="_blank" rel="noopener noreferrer">Simon Rappold</a>.
      </>
    ),
    stack: ['Python', 'TypeScript', 'Django', 'PostgreSQL'],
    sourceCode: 'https://github.com/brendel-group/mission_db',
  }, */
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    category: 'Backend',
    short: 'BE',
    items: [
      {name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
      {name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
      {name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'},
      {name: 'Scala', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg'},
    ]
  },
  {
    category: 'Frontend',
    short: 'FE',
    items: [
      {name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
      {name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
      {name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
      {name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
    ]
  },
  {
    category: 'Tools',
    short: 'Tools',
    items: [
      {name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'},
      {name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
      {name: 'Github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'},
    ]
  },
  {
    category: 'Libraries',
    short: 'Libs',
    items: [
      {name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'},
      {name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'},
      {name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'},
      {name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
    ]
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'oliver.heckel2002@gmail.com',
}

export { header, about, projects, skills, contact }
