// eslint-disable-next-line simple-import-sort/imports

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
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import portfolioImage10 from '../images/portfolio/portfolio-8.jpg';
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
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Snowboarding, Alabama Football (Roll Tide!), Whiskey, and Horror Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Alabama', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Larimer County/Freelance Programmer', Icon: BuildingOffice2Icon},
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
    title: 'Elevate Fitness',
    description: `Managed and enhanced Elevate Fitness's online presence with a user-focused website, integrating real-time APIs and streamlining client interactions.`,
    url: 'https://www.elevatettown.com/',
    image: portfolioImage4,
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
    url: 'https://www.tristancollins.org',
    image: portfolioImage8,
  },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  {
    title: 'Larimer County Bulk Data Downloads Section',
    description: `Developed and integrated RESTful API endpoints for bulk data downloads at Larimer County Assessor's Office, streamlining public access to essential data.`,
    url: 'https://www.larimer.gov/assessor/publicdata',
    image: portfolioImage10,
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
    id: 1,
    items: [
      {
        date: '2018-2023',
        location: 'University of Alabama, Tuscaloosa, AL',
        title: 'Bachelor of Science in Commerce & Business Administration, Management Information Systems (MIS)',
        content: <p>Management Information Systems (MIS) is a dynamic blend of computer science and business disciplines. <br></br> 
          This major equips you with technical expertise in software development and data management while providing a strong foundation in key business areas like finance, accounting, management, operations, and business administration.</p>,
        skillsTitle: st,
        skills: "SQL • C# • React.js • JavaScript • TypeScript • Python • Stakeholder Relations • Business Administration",
      }
    ]
  }
];

export const experience: TimelineItem[] = [
  {
    id: 1,
    items: [
      { 
        date: '2023 - Present',
        location: "Larimer County Assessor's Office, Fort Collins, CO",
        title: 'Application Support Specialist (Full Time)',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>
              As an Application Support Specialist at the Larimer County Assessor's Office,
              I enhance operational efficiency and data integrity by leveraging Python for
              process automation and complex SQL for data analysis.
            </p>

            <p>
              I utilize tools like RealWare and PowerBI to create insightful visualizations
              and streamline data management. My work ensures accurate data handling and
              supports key decision-making processes within the organization.
            </p>
          </div>
        ),
        skillsTitle: st,
        skills: "SQL • C# • React.js • JavaScript • TypeScript • Python • Stakeholder Relations • Business Administration • API Testing",
      }
    ]
  },
  {
    id: 2,
    items: [
      {
        date: '2023 - Present',
        location: 'Remote',
        title: 'Collins Web Design LLC (Independent Web Development and Consulting)',
        content: (
          <div className="space-y-4">
            <p>Please view my current website catalog by clicking any of the following links:</p>

            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://www.4daycolorado.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  4 Day Colorado <span className="opacity-70">(Non-Profit)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.elevatettown.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  Elevate Fitness <span className="opacity-70">(Personal Training Services)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tristancollins.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  My Resume Website <span className="opacity-70">(the one you’re on now!)</span>
                </a>
              </li>
            </ul>

            <p className="leading-relaxed">
              As an independent Web Developer / Consultant, I have been instrumental in developing and managing the
              online presence of multiple companies in different fields. Leveraging a robust stack of HTML, CSS, React.js,
              Next.js, JavaScript, TypeScript, and more, I create user-friendly and visually appealing websites.
            </p>
          </div>
        ),
        skillsTitle: st,
        skills: "HTML • CSS • React.js • JavaScript • PHP • RESTful API • Postman • CURL • Web Development • Web Maintanence",
      },
    ]
  },
  {
    id: 3,
    items: [
      {
        date: '2021 - 2022',
        location: 'GALT Pharmaceuticals, Remote',
        title: 'Fullstack Engineer (Contract Position)',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>
              At GALT Pharmaceuticals, I led a comprehensive data integration project, overseeing all aspects of back-end and front-end development.
            </p>

            <p>
              My achievements include extensive API testing, building robust front-end interfaces with ReactJS, SCSS, JavaScript, and 
              Bootstrap, developing back-end functionalities with Django and C#, and implementing OAuth 2.0 for secure authentication.
            </p>
            

          </div>
        ),
        skillsTitle: st,
        skills: "Database Design • SQL • React.js • JavaScript • Python • C# • Django • Pandas • RESTful API • OAuth 2.0 • QuickBooks API • Postman • CURL",
      }
    ]
  },
  {
    id: 4,
    items:[
      {
        date: '2021 - 2022',
        location: 'Self Employed, Tuscaloosa, AL',
        title: 'Fullstack Development/SQL Tutor (Part Time)',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>
              As a Fullstack Development/SQL Tutor, I provided comprehensive tutoring in three Management Information Systems (MIS) classes, with a 
              primary focus on full stack development and Object-Oriented Programming. These classes covered a diverse tech stack, including C#, 
              HTML5, CSS, Twitter Bootstrap, SQL, and JavaScript.
            </p>

            <p>
              I emphasized database management, delivering hands-on experience in SQL queries, database normalization, and data integrity. My tailored learning plans and technical problem-solving support ensured student success, with all achieving high academic performance.
            </p>
          </div>
        ),
        skillsTitle: st,
        skills: "SSMS • SQL • C# • HTML • CSS • JavaScript • Microsoft CORS",
      }
    ]
  },
  {
    id: 5,
    items: [
      {
        date: '2021 - 2021',
        location: 'Brasfield & Gorrie, Birmingham, AL',
        title: 'Information Technology Support Intern (Intership)',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>
              Made certain that all measures of technology were properly working, creating a smooth workday for employees in all different sectors 
              of the company.
            </p>
          </div>
        ),
        skillsTitle: st,
        skills: "Cisco Call Manager • Active Directory • Information Technology • Print Logic • Tech Support",  
      }
    ]
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
