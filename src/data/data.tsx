import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tristan Collins | Homepage',
  description: "Homepage",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Tristan Collins.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Denver based <strong className="text-stone-100">Full Stack Software Engineer, Web Developer, Database Administrator,</strong> and avid snowboarder.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume/TristanCollinsResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: [
    {text: 'I am a Denver-based developer and engineer with a deep passion for government work and crafting software solutions that empower local businesses. '},
    // {text: 'My heart lies in web and app development, where I enjoy working with barebones HTML, CSS, and JavaScript, as well as React.js to build efficient and impactful applications.'},
    {text: 'When I’m not coding, you can find me on the slopes snowboarding and skiing, exploring the great outdoors through hiking, or indulging in a good whiskey tasting session.'},
  ],
  aboutItems: [
    {label: 'Location', text: 'Denver, CO', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Snowboarding, Alabama Football (Roll Tide!), Whiskey, and Horror Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Alabama', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Larimer County/Freelance Web Developer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'API Tools',
    skills: [
      {
        name: 'Curl',
        level: 8,
      },
      {
        name: 'Postman',
        level: 10,
      },
      {
        name: 'SoapUI',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'C#',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 10,
      },
    ],
  },
  {
    name: 'Database Management',
    skills: [
      {
        name: 'SQL',
        level: 10,
      },
      {
        name: 'Oracle',
        level: 7,
      },
      {
        name: 'Microsoft Access',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  {
    title: 'Core Method Fitness',
    description: `Managed and enhanced Core Method Fitness's online presence with a user-focused website, integrating real-time APIs and streamlining client interactions.`,
    url: 'www.coremethod.fitness/',
    image: porfolioImage4,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Larimer County Data Downloads Section (Coming Soon!)',
  //   description: 'Developed and integrated RESTful API endpoints for the data downloads section at Larimer County, streamlining public access to essential data. Front-end development is pending and will be available soon.',
  //   url: '',
  //   image: porfolioImage7,
  // },
  {
    title: `My Resume Website (the site you're on now!)`,
    description: 'Developed a Next.js resume website with TSX, delivering a modern and dynamic user experience while showcasing my professional portfolio.',
    url: 'www.tristancollins.org',
    image: porfolioImage8,
  },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  {
    title: 'Larimer County Data Downloads Section (Coming Soon!)',
    description: 'Developed and integrated RESTful API endpoints for the data downloads section at Larimer County, streamlining public access to essential data. Front-end development is pending and will be available soon.',
    url: '',
    image: porfolioImage10,
  },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
const st = "Skills: ";
export const education: TimelineItem[] = [
  {
    date: '2018-2023',
    location: 'University of Alabama, Tuscaloosa, AL',
    title: 'Bachelor of Science in Commerce & Business Administration, Management Information Systems (MIS)',
    content: <p>Management Information Systems (MIS) is a dynamic blend of computer science and business disciplines. <br></br> 
      This major equips you with technical expertise in software development and data management while providing a strong foundation in key business areas like finance, accounting, management, operations, and business administration.</p>,
    skillsTitle: st,
    skills: "SQL • C# • React.js • JavaScript • TypeScript • Python • Stakeholder Relations • Business Administration",
  }
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: "Larimer County Assessor's Office, Fort Collins, CO",
    title: 'Application Support Specialist (Full Time)',
    content: (
      <p>
        As an Application Support Specialist at Larimer County Assessor's Office, I enhance operational efficiency and data integrity by leveraging Python for process automation and complex SQL for data analysis. 
        <br></br>
        <br></br>
        I utilize tools like RealWare and PowerBI to create insightful visualizations and streamline data management. My work ensures accurate data handling and supports key decision-making processes within the organization.
      </p>
    ),
    skillsTitle: st,
    skills: "SQL • C# • React.js • JavaScript • TypeScript • Python • Stakeholder Relations • Business Administration",
  },
  {
    date: '2023 - Present',
    location: 'Coremethod.fitness, Remote',
    title: 'Web Administrator (Freelance Role)',
    content: (
      <p>
        As a Web Administrator for Core Method Fitness, I developed and managed the company's online presence using HTML, CSS, and JavaScript to create a user-friendly, visually appealing website.
        <br></br>
        <br></br>
        My key achievements include automating communication via PHP, integrating APIs for real-time updates and payment processing, and streamlining client interactions, significantly improving the digital experience for Core Method Fitness.
      </p>
    ),
    skillsTitle: st,
    skills: "HTML • CSS • React.js • JavaScript • PHP • RESTful API • Postman • CURL • Web Development • Web Maintanence",
  },
  {
    date: '2021 - 2022',
    location: 'GALT Pharmaceuticals, Remote',
    title: 'Fullstack Engineer (Contract Position)',
    content: (
      <p>
        At GALT Pharmaceuticals, I led a comprehensive data integration project, overseeing all aspects of back-end and front-end development. I developed a RESTful API to streamline data transfer and modernize the company's outdated system. 
        <br></br>
        <br></br>
        My achievements include extensive API testing, building robust front-end interfaces with ReactJS, HTML, CSS, JavaScript, and developing back-end functionalities with Django and C#. I also enhanced database accuracy using Python and SQL, and implemented OAuth 2.0 for secure authentication.
      </p>
    ),
    skillsTitle: st,
    skills: "Database Design • SQL • React.js • JavaScript • Python • C# • Django • Pandas • RESTful API • OAuth 2.0 • QuickBooks API • Postman • CURL",
  },
  {
    date: '2022 - 2022',
    location: 'Eastman Equity Real Estate, Remote',
    title: 'Web Developer (Freelance Role)',
    content: (
      <p>
        Provided needed cosmetic upgrades to previous version of website. 
        <br></br>
        <br></br>
        Also utilized graphic design skills to do work in PhotoWorks for certain parts of the website.
      </p>
    ),
    skillsTitle: st,
    skills: "HTML • SquareSpace • CSS • PhotoWorks",
  },
  {
    date: '2021 - 2022',
    location: 'Self Employed, Tuscaloosa, AL',
    title: 'Fullstack Development/SQL Tutor (Part Time)',
    content: (
      <p>
        As a Fullstack Development/SQL Tutor, I provided comprehensive tutoring in MIS courses, focusing on full stack development and Object-Oriented Programming. I guided students through front-end and back-end development using C#, HTML5, CSS, and SQL.
        <br></br>
        <br></br>
        I emphasized database management, delivering hands-on experience in SQL queries, database normalization, and data integrity. My tailored learning plans and technical problem-solving support ensured student success, with all achieving high academic performance.
      </p>
    ),
    skillsTitle: st,
    skills: "SSMS • SQL • C# • HTML • CSS • JavaScript • Microsoft CORS",
  },
  {
    date: '2021 - 2021',
    location: 'Brasfield & Gorrie, Birmingham, AL',
    title: 'Information Technology Support Intern (Intership)',
    content: (
      <p>
        Made certain that all measures of technology were properly working, creating a smooth workday for employees in all different sectors of the company.
      </p>
    ),
    skillsTitle: st,
    skills: "Cisco Call Manager • Active Directory • Information Technology • Print Logic • Tech Support",
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: `Whether you have a question, want to discuss a project, or just want to connect, here's how you can get in touch.`,
  items: [
    {
      type: ContactType.Email,
      text: 'tpcollins00@gmail.com',
      href: 'mailto:tpcollins00@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Denver, CO',
      href: 'https://www.google.com/maps/place/Denver,+CO/@39.7642224,-105.0199145,11z/data=!3m1!4b1!4m6!3m5!1s0x876b80aa231f17cf:0x118ef4f8278a36d6!8m2!3d39.7392358!4d-104.990251!16zL20vMDJjbDE?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'tpcollins',
      href: 'https://github.com/tpcollins',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Tristan Collins',
      href: 'https://www.linkedin.com/in/tristanpcollins/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tpcollins'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tristanpcollins/'}
];
