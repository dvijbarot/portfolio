import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AirBnb Clone with React",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Tenant Management System",
    des: "Developed a robust rental unit management system for real estate, enabling efficient tracking of all stakeholders. Implemented a centralized accounting system for streamlined rent payments and financial management.",
    img: "/tenant.jpeg",
    iconLists: ["fab fa-java", "fab fa-python", "fab fa-react"],
    link: "https://github.com/yourusername/tenant-management-system",
  },
  {
    id: 2,
    title: "Unified Health Portal (UHP)",
    des: "A comprehensive web-based healthcare management app facilitating appointment scheduling, EHR storage, prescriptions, billing, communication, and reporting. Developed using Angular for the frontend, C# with .NET MVC framework for the backend, and local SQL Server for data storage.",
    img: "/mediq.jpg",
    iconLists: ["fab fa-angular", "fab fa-microsoft", "fas fa-database", "fab fa-js"],
    link: "https://github.com/yourusername/unified-health-portal",
  },
  {
    id: 3,
    title: "Face Mask Detection",
    des: "Developed a real-time face mask detection system using deep learning and computer vision techniques to identify individuals wearing masks in public spaces.",
    img: "/facemask.jpeg",
    iconLists: ["fab fa-python", "fas fa-eye", "fas fa-brain"],
    link: "https://github.com/yourusername/face-mask-detection",
  },
  {
    id: 4,
    title: "Stock Price Prediction",
    des: "Implemented a machine learning model to predict stock prices using historical data, providing insights for potential future market trends and investment strategies.",
    img: "/stock.jpeg",
    iconLists: ["fab fa-python", "fas fa-chart-line", "fab fa-google"],
    link: "https://github.com/yourusername/stock-price-prediction",
  },
  {
    id: 5,
    title: "ERP System",
    des: "Developed a comprehensive ERP system to manage business processes and integrate various functions such as inventory, sales, HR, and finance.",
    img: "/erp.jpeg",
    iconLists: ["fab fa-js", "fab fa-node-js", "fab fa-docker"],
    link: "https://github.com/yourusername/erp-system",
  },
  {
    id: 6,
    title: "Cricket Organization App",
    des: "Created an app to manage cricket tournaments, track player statistics, and provide real-time updates and notifications for cricket matches.",
    img: "/cricket.png",
    iconLists: ["fab fa-react", "fab fa-node-js", "fas fa-bell"],
    link: "https://github.com/yourusername/cricket-org-app",
  },
  {
    id: 7,
    title: "Airbnb Clone",
    des: "Developed a clone of Airbnb to facilitate property listings, booking management, and user reviews, providing a platform for hosts and guests.",
    img: "/airbnb.jpeg",
    iconLists: ["fab fa-react", "fab fa-google", "fab fa-css3-alt"],
    link: "https://github.com/yourusername/airbnb-clone",
  },
  {
    id: 8,
    title: "Bibliometric Publication",
    des: "Published a bibliometric analysis focusing on the impact and trends in software engineering research, utilizing various bibliometric indicators.",
    img: "/LPP.svg",
    iconLists: ["fab fa-researchgate", "fab fa-r-project"],
    link: "https://github.com/yourusername/bibliometric-publication",
  },
  {
    id: 9,
    title: "Remaining Useful Life and Anomaly Detection on Machinery",
    des: "Final year project focusing on predicting the remaining useful life of machinery and detecting anomalies using machine learning techniques to prevent unexpected breakdowns.",
    img: "/rul.jpeg",
    iconLists: ["fab fa-python", "fas fa-brain", "fas fa-cogs"],
    link: "https://github.com/yourusername/remaining-useful-life",
  },
];




export const testimonials = [
  {
    quote:
      "Working with Dvij on critical projects was an absolute pleasure. His technical expertise and calm demeanor under pressure ensured we met our deadlines with outstanding results. His ability to solve complex problems and deliver secure, scalable solutions made a significant impact on our operations.",
    name: "Dave McLean",
    title: "Director of Security, NA Region, Sony",
    img: "/dave.jpeg"
  },
  {
    quote:
      "Dvij’s innovative approach to web development and his ability to think critically under pressure are unparalleled. He transformed our project workflow, ensuring high efficiency and minimal downtime. A reliable team member who always goes above and beyond.",
    name: "Anuj Kumar",
    title: "Team Lead, TCS",
    img: "/anuj.jpeg"
  },
  {
    quote:
      "Collaborating with Dvij was a turning point for our platform. His sharp problem-solving skills and deep understanding of web technologies were invaluable in scaling our systems. Dvij’s dedication and proactive attitude make him a standout professional in his field.",
    name: "Sundeep Bose",
    title: "CTO, Agri10x",
    img: "/bose.jpeg"
  },
  {
    quote:
      "Dvij’s ability to combine technical expertise with clear communication made him an indispensable part of our project. From managing tight deadlines to solving complex development challenges, he consistently exceeded expectations. He is a true professional with a passion for innovation.",
    name: "Shveta Raina",
    title: "Founder, Talerang",
    img: "/shveta.jpeg"
  },
];


export const companies = [
  {
    id: 1,
    name: "Sony Pictures Imageworks",
    img: "/spi.png",
    nameImg: "/spi.png",
  },{
    id: 2,
    name: "TCS",
    img: "/tcs.svg",
    nameImg: "/tcs.svg",
  },
  {
    id: 3,
    name: "Agri10x",
    img: "/agri10x.jpg",
    nameImg: "/agri10x.jpg",
  },
  {
    id: 4,
    name: "Talerang",
    img: "/talerang.jpeg",
    nameImg: "/Talerang.jpg",
  }
  
];

export const workExperience = [
  {
    id: 1,
    title: "System Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    duration: "July 2021 – July 2022",
    desc: [
      "Proactively managed and resolved ServiceNow tickets related to mainframe errors, ensuring uninterrupted operation of critical Logical Partitions and Server Jobs. Resulted in a significant reduction in service downtime.",
      "Collaborated seamlessly with Onshore and Offshore customer teams, providing swift resolutions for ServiceNow tickets.",
      "Completed a comprehensive 3-month training program in Python, Java, C++, and ITIL Certification, enhancing technical proficiency for successful project execution."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Agri10x",
    location: "Pune, India",
    duration: "December 2019 – June 2020",
    desc: [
      "Shaped ERP System architecture through meticulous assessment of user requirements and system flow modeling.",
      "Demonstrated leadership in agile development of the ERP System, ensuring efficient collaboration and timelines.",
      "Engineered APIs for seamless database connectivity, enhancing data retrieval and management using MongoDB.",
      "Innovatively developed modular chart components, ensuring uniformity across ERP segments. Each module allowed dynamic generation of charts based on the data in the corresponding table."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Talerang",
    location: "Mumbai, India",
    duration: "June 2019 – July 2019",
    desc: [
      "Utilized jQuery, JavaScript, PHP, and SQL for optimized registration and login pages, improving data management.",
      "Enhanced user engagement by implementing the Lightbox feature for YouTube videos site-wide.",
      "Contributed to Android application design and documentation for a user-friendly interface."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/dvijbarot"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/barot_dvij"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/dvijbarot/"
  },
];