// index.js
export const servicesData = [
  {
    title: "Full-Stack Web Development",
    description:
      "I build robust, secure, and highly optimized web applications from backend logic to interactive frontend user interfaces, ensuring high performance, security, and seamless scale.",
    items: [
      {
        title: "React & Next.js Ecosystem",
        description: "(NextJS, React.js, Context API, Redux Toolkit)",
      },
      {
        title: "Server & API Architectures",
        description: "(Node.js, Express, NestJS, RESTful APIs, WebSockets/Socket.io)",
      },
      {
        title: "Database Engineering & ORMs",
        description: "(SQL, NoSQL, MongoDB, PostgreSQL, Mongoose, Prisma)",
      },
    ],
  },
  {
    title: "Backend & System Design",
    description:
      "Designing scalable server-side systems, modular routing layers, and secure databases built to handle complex business requirements and high traffic load.",
    items: [
      {
        title: "Security & Auth Protocols",
        description: "(JWT, bcrypt hashing, Session-based authentication, Role-based auth)",
      },
      {
        title: "Data Integrity & Uploads",
        description: "(Multer image uploading, validation pipelines, data sanitization)",
      },
      {
        title: "Clean Folder Architecture",
        description: "(Modular configurations, bootstrap structures, scalable directories)",
      },
    ],
  },
  {
    title: "UI/UX Engineering",
    description:
      "Bridging the gap between design and high-end interactive systems. I translate complex Figma layouts into fluid, modern, responsive, and fully interactive web experiences.",
    items: [
      {
        title: "Interactive Components",
        description: "(GSAP, Framer Motion, micro-animations, scroll triggers)",
      },
      {
        title: "Responsive Design",
        description: "(Mobile-first fluid layouts, flexbox, dynamic CSS grids)",
      },
      {
        title: "Modern Styling Systems",
        description: "(Tailwind CSS, Vanilla CSS, Styled Components)",
      },
    ],
  },
  {
    title: "Performance & Optimization",
    description:
      "Optimizing system responsiveness and asset load times to ensure lightning-fast experiences and standard Lighthouse scores.",
    items: [
      {
        title: "System Performance",
        description: "(Image compression, lazy loading, code splitting, caching)",
      },
      {
        title: "SEO & Accessibility",
        description: "(Semantic HTML, WCAG compliance, metadata automation)",
      },
      {
        title: "API Verification & QA",
        description: "(Postman testing, debugging tools, multi-environment configurations)",
      },
    ],
  },
];
export const projects = [
  {
    id: 9,
    name: "Golden Grain Global",
    description:
      "A premium corporate import/export and global agricultural partnerships platform. Offers a sophisticated, responsive showcase for international food sourcing, bulk packing, and global distribution.",
    href: "https://www.goldengrainglobal.com/",
    image: "/assets/projects/golden-grain.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Responsive Slideshow" },
      { id: 4, name: "Global Sourcing" },
    ],
  },
  {
    id: 7,
    name: "Grosha | Premium Exports",
    description:
      "Giza, Egypt's premier IQF frozen food supplier website. Features highly polished, elegant editorial layouts presenting frozen vegetables & fruits, automated quoting system, and global logistics hub network maps.",
    href: "https://grosha.vercel.app/",
    image: "/assets/projects/grosha.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Editorial Layout" },
    ],
  },
  {
    id: 8,
    name: "AMR-HESHAM Dashboard",
    description:
      "A sophisticated, high-performance coaching and client health management dashboard. Features customizable workout and diet sheets, daily performance tracking, live calorie goals, and weekly strategies.",
    href: "https://c-amr-hsham-v9w3.vercel.app/dashboard",
    image: "/assets/projects/camr-hsham.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Radix UI" },
      { id: 4, name: "Full-Stack Dashboard" },
    ],
  },
  {
    id: 1,
    name: "Minpus Keyboard",
    description:
      "A modern, responsive keyboard presentation website focusing on sleek design and interactive elements.",
    href: "https://minposs-keyboard-jjeg.vercel.app/",
    image: "/assets/projects/Screenshot 2026-02-27 at 13.23.08.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Framer Motion" },
    ],
  },
  {
    id: 2,
    name: "Modern E-commerce",
    description:
      "A fast and stylish e-commerce platform with a clean layout, offering a smooth browsing and shopping experience.",
    href: "https://new-ecommerce-virid.vercel.app/",
    image: "/assets/projects/Screenshot 2026-02-27 at 13.23.19.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "React" },
    ],
  },
  {
    id: 3,
    name: "Modern GYM",
    description:
      "A premium fitness website showcasing workout plans, gym facilities, and memberships using high-energy UI components.",
    href: "https://fullstack-gym-website-mlkm.vercel.app/",
    image: "/assets/projects/Screenshot 2026-02-27 at 13.23.39.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "CSS3" },
    ],
  },
  {
    id: 4,
    name: "Soda Can 3D",
    description:
      "An immersive 3D presentation of a soda can utilizing WebGL and Three.js technologies for interactive product viewing.",
    href: "https://webbb-can-seven.vercel.app/",
    image: "/assets/projects/Screenshot 2026-02-27 at 13.24.01.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React Three Fiber" },
      { id: 2, name: "Three.js" },
      { id: 3, name: "GSAP" },
    ],
  },
  {
    id: 5,
    name: "Valo Game",
    description:
      "A vibrant and energetic website dedicated to gaming content, featuring dynamic layouts and engaging animations.",
    href: "https://plsay-game.vercel.app/",
    image: "/assets/projects/Screenshot 2026-02-27 at 13.26.01.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Framer Motion" },
    ],
  },
  {
    id: 6,
    name: "Mansour Project",
    description:
      "A well-structured corporate or personal presentation site emphasizing accessibility, typography, and clear UI design.",
    href: "https://mmmansourr-zeta.vercel.app/",
    image: "/assets/projects/Screenshot 2026-02-27 at 13.27.10.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/a_b_d_e_l_r_h_m_a_n_123/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abdelrhman-mounier-b62426369/" },
  { name: "GitHub", href: "https://github.com/bodajava" },
];
