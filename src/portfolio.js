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
        I&apos;m a seventh-semester Computer Science student at the{' '}
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
  resume: (
    <>
      <h4>Personal Data</h4>
      <p>
        Born 2002<br />
        Kirchheim u. Teck, Germany
      </p>

      <h4>School</h4>
      <p>
        Abitur 2021<br />
        Hölderlin Gymnasium in Nürtingen, Germany
      </p>

      <h4>Temporary Jobs</h4>
      <p>
        Warehouse Picker 2021<br />
        Lidl Zentrallager STU in Kirchheim u. Teck, Germany<br />
        <br />
        Temporary Helper 2022<br />
        Gustav Magenwirth GmbH & Co. KG in Hülben, Germany
        <br />
        Working Student 2025/26<br />
        ElringKlinger AG in Neuffen, Germany
      </p>

      <h4>University</h4>
      <p>
        Student of Computer Science since 2022<br />
        Eberhard Karls University of Tübingen, Germany<br />
        Bachelor of Science, expected graduation in 2026
      </p>
    </>
  ),
  social: {
    linkedin: 'https://linkedin.com/in/oliver-heckel-aa152a374',
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
    stack: ['Python', 'TypeScript', 'Django', 'PostgreSQL', 'React', 'CSS', 'Jest'],
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

const funProjects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Minecraft Server Plugins',
    description: (
      <>
        <h5>Description</h5>
        <p>
        These are multiple plugins I developed for Bukkit/Spigot (Minecraft 1.21.4).<br />
        They are designed to enhance the gameplay experience by adding new features and functionalities to Vanilla Minecraft.
        </p>
        
        <h5>List of plugins</h5>
        <p>
          <strong><a href="https://github.com/KageKrito/Minecraft-Server-Plugins" target="_blank" rel="noopener noreferrer">Player Backpack</a></strong><br />
          A plugin that allows players to store items in a shared backpack.<br />
          Players can access the backpack by using the command <code>/bp</code>.<br />
          All players on the server can access the backpack, making it a great way to share items and resources.<br />
          <br />
        </p>
        <p>
          <strong><a href="https://github.com/KageKrito/Minecraft-Server-Plugins" target="_blank" rel="noopener noreferrer">Shulker Viewer</a></strong><br />
          A plugin that allows players to view a preview of the shulker inventory.<br />
          Players can access this preview by right-clicking on a shulker box in the inventory.<br />
          Items in shulker box cannot be changed inside the preview, making it a fast way to check the contents of a shulker box without having to place it down.<br />
          <br />
        </p>
        <p>
          <strong><a href="https://github.com/KageKrito/Minecraft-Server-Plugins" target="_blank" rel="noopener noreferrer">Ender Chest Viewer</a></strong><br />
          A plugin that allows players to view a preview of their ender chest inventory.<br />
          Players can access this preview by right-clicking on an ender chest in the inventory.<br />
          Items in the ender chest cannot be changed inside the preview, making it a fast way to check the contents of the ender chest without having to place it down.<br />
          <br />
        </p>
        <p>
          <strong><a href="https://github.com/KageKrito/Minecraft-Server-Plugins" target="_blank" rel="noopener noreferrer">Comming Soon</a></strong><br />
          Ender Chest Command - Players can access their enderchest by using the command <code>/ec</code>.<br />
          Player Highlighter - Players can highlight a specified player by using the command <code>/highlight &lt;player name&gt;</code>.<br />
          Chest Remote Viewer - Players can view the inventory of a specified chest by using <code>/view &lt;chest id&gt;</code>.
        </p>
      </>
    ),
    stack: ['Java', 'Bukkit', 'Spigot'],
    sourceCode: 'https://github.com/KageKrito/Minecraft-Server-Plugins',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    category: 'Backend',
    short: 'BE',
    items: [
      {name: 'Java',
        progress: '80',
        logo: 'pictures/skill-logos/java-original.svg',
        logo_outline: 'pictures/skill-logos-outline/java-outline.svg'},
      {name: 'Python',
        progress: '65',
        logo: 'pictures/skill-logos/python-original.svg',
        logo_outline: 'pictures/skill-logos-outline/python-outline.svg'},
      {name: 'C++',
        progress: '40',
        logo: 'pictures/skill-logos/cplusplus-original.svg',
        logo_outline: 'pictures/skill-logos-outline/cplusplus-outline.svg'},
      {name: 'Scala',
        progress: '60',
        logo: 'pictures/skill-logos/scala-original.svg',
        logo_outline: 'pictures/skill-logos-outline/scala-outline.svg'},
    ]
  },
  {
    category: 'Frontend',
    short: 'FE',
    items: [
      {name: 'HTML',
        progress: '70',
        logo: 'pictures/skill-logos/html5-original.svg',
        logo_outline: 'pictures/skill-logos-outline/html5-outline.svg'},
      {name: 'CSS',
        progress: '75',
        logo: 'pictures/skill-logos/css3-original.svg',
        logo_outline: 'pictures/skill-logos-outline/css3-outline.svg'},
      {name: 'JavaScript',
        progress: '80',
        logo: 'pictures/skill-logos/javascript-original.svg',
        logo_outline: 'pictures/skill-logos-outline/javascript-outline.svg'},
      {name: 'TypeScript',
        progress: '75',
        logo: 'pictures/skill-logos/typescript-original.svg',
        logo_outline: 'pictures/skill-logos-outline/typescript-outline.svg'},
    ]
  },
  {
    category: 'Tools',
    short: 'Tools',
    items: [
      {name: 'VS Code',
        progress: '85',
        logo: 'pictures/skill-logos/vscode-original.svg',
        logo_outline: 'pictures/skill-logos-outline/vscode-outline.svg'},
      {name: 'Git',
        progress: '90',
        logo: 'pictures/skill-logos/git-original.svg',
        logo_outline: 'pictures/skill-logos-outline/git-outline.svg'},
      {name: 'Github',
        progress: '90',
        logo: 'pictures/skill-logos/github-original.svg',
        logo_outline: 'pictures/skill-logos-outline/github-outline.svg'},
    ]
  },
  {
    category: 'Libraries',
    short: 'Libs',
    items: [
      {name: 'NumPy',
        progress: '60',
        logo: 'pictures/skill-logos/numpy-original.svg',
        logo_outline: 'pictures/skill-logos-outline/numpy-outline.svg'},
      {name: 'PyTorch',
        progress: '35',
        logo: 'pictures/skill-logos/pytorch-original.svg',
        logo_outline: 'pictures/skill-logos-outline/pytorch-outline.svg'},
      {name: 'Jest',
        progress: '60',
        logo: 'pictures/skill-logos/jest-original.svg',
        logo_outline: 'pictures/skill-logos-outline/jest-outline.svg'},
      {name: 'React',
        progress: '60',
        logo: 'pictures/skill-logos/react-original.svg',
        logo_outline: 'pictures/skill-logos-outline/react-outline.svg'},
      {name: 'p5',
        progress: '55',
        logo: 'pictures/skill-logos/p5js-original.svg',
        logo_outline: 'pictures/skill-logos-outline/p5js-outline.svg'},
    ]
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'oliver.heckel2002@gmail.com',
}

export { header, about, projects, funProjects, skills, contact }
