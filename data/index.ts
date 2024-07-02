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
    title: "Currently building a JS Animation library",
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
    img: "/p1.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javafx.svg"],
    link: "https://github.com/yourusername/tenant-management-system",
  },
  {
    id: 2,
    title: "Sales Data Integration and Analysis",
    des: "Implemented end-to-end ETL pipeline for sales data integration, transformation, and loading into a centralized database. Optimized PostgreSQL database for efficient data management, utilizing bulk loading techniques and automating ETL processes for real-time updates. Leveraged Tableau to create interactive dashboards and visualizations, providing stakeholders with actionable insights into sales performance, trends, and forecasting.",
    img: "/p2.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postgresql.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/etl.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tableau.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javafx.svg"],
    link: "https://github.com/yourusername/sales-data-integration",
  },
  {
    id: 3,
    title: "MediQ - Hospital Management System",
    des: "An extensive website for doctors, nurses, patients, and hospital admin, developed using HTML, CSS, and PHP. Employs MySQL for scheduling and monitoring patients, providing the hospital administrator with key statistics for informed decision-making on staffing and service expansion.",
    img: "/p3.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/xampp.svg"],
    link: "https://github.com/yourusername/mediq-hospital-management",
  },
  {
    id: 4,
    title: "Unified Health Portal (UHP)",
    des: "A comprehensive web-based healthcare management app facilitating appointment scheduling, EHR storage, prescriptions, billing, communication, and reporting. Developed using Angular for the frontend, C# with .NET MVC framework for the backend, and local SQL Server for data storage.",
    img: "/p4.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/angular.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/csharp.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/dot-net.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sqlserver.svg"],
    link: "https://github.com/yourusername/unified-health-portal",
  },
  {
    id: 5,
    title: "Face Mask Detection",
    des: "Developed a real-time face mask detection system using deep learning and computer vision techniques to identify individuals wearing masks in public spaces.",
    img: "/p5.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/opencv.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tensorflow.svg"],
    link: "https://github.com/yourusername/face-mask-detection",
  },
  {
    id: 6,
    title: "Stock Price Prediction",
    des: "Implemented a machine learning model to predict stock prices using historical data, providing insights for potential future market trends and investment strategies.",
    img: "/p6.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/scikit-learn.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/pandas.svg"],
    link: "https://github.com/yourusername/stock-price-prediction",
  },
  {
    id: 7,
    title: "ERP System",
    des: "Developed a comprehensive ERP system to manage business processes and integrate various functions such as inventory, sales, HR, and finance.",
    img: "/p7.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/node-dot-js.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg"],
    link: "https://github.com/yourusername/erp-system",
  },
  {
    id: 8,
    title: "Cricket Organization App",
    des: "Created an app to manage cricket tournaments, track player statistics, and provide real-time updates and notifications for cricket matches.",
    img: "/p8.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/node-dot-js.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg"],
    link: "https://github.com/yourusername/cricket-org-app",
  },
  {
    id: 9,
    title: "Airbnb Clone",
    des: "Developed a clone of Airbnb to facilitate property listings, booking management, and user reviews, providing a platform for hosts and guests.",
    img: "/p9.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/firebase.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg"],
    link: "https://github.com/yourusername/airbnb-clone",
  },
  {
    id: 10,
    title: "Bibliometric Publication",
    des: "Published a bibliometric analysis focusing on the impact and trends in software engineering research, utilizing various bibliometric indicators.",
    img: "/p10.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/latex.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/r.svg"],
    link: "https://github.com/yourusername/bibliometric-publication",
  },
  {
    id: 11,
    title: "Remaining Useful Life and Anomaly Detection on Machinery",
    des: "Final year project focusing on predicting the remaining useful life of machinery and detecting anomalies using machine learning techniques to prevent unexpected breakdowns.",
    img: "/p11.svg",
    iconLists: ["https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tensorflow.svg", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/scikit-learn.svg"],
    link: "https://github.com/yourusername/remaining-useful-life",
  }
];



export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "TCS",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Agri10x",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Talerang",
    img: "/host.svg",
    nameImg: "/hostName.svg",
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