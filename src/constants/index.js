export const myProjects = [
  {
    id: 1,
    title: " VidGenie– AI-powered video content generator",
    description:
      "Developed a full-stack application for YouTube channel data scraping and AI-driven video idea generation using Next.js.",
    subDescription: [
      "Integrated YouTube Data API to fetch channel videos, comments, and metadata for detailed analysis.",
      "Implemented AI workflows with CrewAI/OpenAI to analyze video content and generate optimized video ideas.",
      "Deployed and managed serverless PostgreSQL databases with Neon and Drizzle ORM.",
      // "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/projects/landingpage.png",
    tags: [
      {
        id: 1,
        name: "Crew-AI",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Youtube-API",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "Open-AI",
        path: "/assets/logos/tailwindcss.svg",
      },
            {
        id: 4,
        name: "Postgresql",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: " Open Source AI- Smart GitHub Issue Finder",
    description:
      "Built an issue-discovery platform filtering GitHub tickets by language/difficulty with 10k+ curated issues.",
    subDescription: [
      "Implemented AI chatbot (Gemini API) to explain technical issues and suggest solutions",
      "Features: Saved issues list, repo health metrics, 1-click GitHub redirects : Next.js 14, Tailwind, ShadCN, GitHub REST/GraphQL API, Vercel hosting, Firebase-Firestore",
      "Fetched Users Github data and presents it with chats and graphs to track thier performance",
      "Created leaderboard and ranked users based on issues solved to make website more interactive.",
    ],
    href: "https://opensource-nu.vercel.app/",
    logo: "",
    image: "/projects/opensource.png",
    tags: [
      {
        id: 1,
        name: "Github-API",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Gemini",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Graphql",
        path: "/assets/logos/tailwindcss.svg",
      },
            {
        id: 4,
        name: "prisma",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "FinAI- AI-Powered Financial Management Platform",
    description:
      " Developed a full-stack financial management platform with intelligent budgeting and receipt scanning using React 19,Next.js 15, and Tailwind CSS.",
    subDescription: [
      "Integrated Supabase with Prisma ORM for real-time transaction tracking and secure multi-account management.",
      "Implemented AI-powered receipt scanning that automatically extracts and categorizes transaction details.",
      "proactive budget alerts with Inngest background jobs that trigger email notifications at 80 percent spending thresholds.",
      "Built interactive dashboards with data visualizations for spending patterns, income vs. expenses, and net worth tracking.",
    ],
    href: "https://finance-ai-lovat.vercel.app/",
    logo: "",
    image: "/projects/finance.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Innjest",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "Arcjet",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/logos/tailwindcss.svg",
      },
            {
        id: 4,
        name: "Gemini",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "IPhone Website Clone",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Utilized cutting-edge GSAP animations to create a visually captivating experience",
      "incorporating smooth 3D rotations, dynamic light effects, and parallax scrolling.Implemented hover and touch interactions that respond dynamically",
      "including zoom-ins,color shifts, and subtle pulsations, providing a tactile feel reminiscent of a real iPhone.",
    ],
    href: "https://iphone-web-alpha.vercel.app/",
    logo: "",
    image: "/projects/iphoneclone.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/projects/iphoneclone.png",
      },
      {
        id: 2,
        name: "Typescript",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Gsap",
        path: "/assets/logos/git.svg",
      },

    ],
  },
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: " Pikvita Technologies Pvt. Ltd",
    job: "Frontend Development Intern",
    date: "Nov 2024– Dec 2024",
    contents: [
      "Contributed to the development and optimization of Vendor Panel and Admin Panel to streamline operations for managing real users, delivery personnel, and vendors.",
      "Designed and implemented responsive user interfaces using React.js, Tailwind CSS, and Next.js.",
      "Integrated real-time updates and notifications for vendors to efficiently manage orders, inventory, and payments.",
      "Enhanced admin functionality by developing advanced filtering, sorting, and monitoring features.",
      "Collaborated with the backend team to implement data-driven dashboards, providing actionable insights into platform metrics",
    ],
  },
  {
    title: " Navodita Infotech",
    job: " Full-Stack Developer Intern",
    date: "Oct 2023-Nov 2023",
    contents: [
      "Designed and developed a fully responsive e-commerce website using React.js, Tailwind, and Strapi.",
      " Implemented payment gateway integration using Stripe.",
    ],
  },
  {
    title: " Quickflo",
    job: " Product Designer",
    date: "Feb 2024-March 2024",
    contents: [
      "Applied design thinking principles to conceptualize and iterate on solutions for complex user challenges.",
      "Employed rapid prototyping and iterative testing to refine designs, resulting in optimized user engagement and product usability.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
